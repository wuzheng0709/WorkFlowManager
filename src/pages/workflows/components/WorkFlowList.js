import React from 'react';
import { Table } from 'antd';
import { formatTableTitle } from '@/utils/utils';

const WorkFlowList = ({ workflows, serialNo, onSelectChange }) => {
  const handleSelectChange = (serialNos) => {
    const serialNo = serialNos.length > 0 ? serialNos[0] : undefined;
    onSelectChange && onSelectChange(serialNo);
  };

  const columns = [{
    title: 'SerialNo',
    dataIndex: 'serialNo',
  }, {
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Times',
    dataIndex: 'runVersion',
  }, {
    title: 'Version',
    dataIndex: 'version',
  }, {
    title: 'CreatedAt',
    dataIndex: 'createdAt',
  }, {
    title: 'UpdatedAt',
    dataIndex: 'updatedAt',
  }];

  return (
    <div>
      <Table
        dataSource={workflows}
        columns={formatTableTitle('workflow', columns)}
        rowKey={record => record.serialNo}
        rowSelection={{
          type: 'radio',
          onChange: handleSelectChange,
          selectedRowKeys: [serialNo],
        }}
        onRow={(record) => {
          return {
            onClick: () => {
              handleSelectChange([record.serialNo])
            }
          }
        }}
      />
    </div>
  );
};

export default WorkFlowList;
