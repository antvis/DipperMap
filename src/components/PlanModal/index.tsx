import React, { useMemo } from 'react';
import { Button, Modal, Table } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';
import { ColumnsType } from 'antd/lib/table/interface';
import { IPlan } from '../../typings';

interface IProps extends ModalProps {
  setVisible: (newValue: boolean) => void;
}

const PlanModal: React.FC<IProps> = ({ visible, setVisible }) => {
  const columns: ColumnsType<IPlan> = useMemo(
    () => [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
      },
    ],
    [],
  );

  const data: IPlan[] = useMemo(() => [], []);

  const footer = useMemo(() => {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            setVisible(false);
          }}
        >
          保存方案
        </Button>
        <Button onClick={() => setVisible(false)}>关闭</Button>
      </div>
    );
  }, []);

  return (
    <Modal title="方案管理" visible={visible} footer={footer}>
      <Table columns={columns} dataSource={data} />
    </Modal>
  );
};

export default PlanModal;
