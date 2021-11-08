import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Button, message, Modal, Table } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';
import { ColumnsType } from 'antd/lib/table/interface';
import { IPlan } from '@/typings';
import { DatasetModelContext } from '@/context/DatasetContext';
import { ConfigModelContext } from '@/context/ConfigContext';
import {
  formatDateTime,
  generateUnRepeatValue,
  getDBStore,
  getRandomId,
  setDBStore,
} from '@/utils';
import { useMount } from 'ahooks';
import moment from 'moment';

interface IProps extends ModalProps {
  setVisible: (newValue: boolean) => void;
}

const PlanModal: React.FC<IProps> = ({ visible, setVisible }) => {
  const [planList, setPlanList] = useState<IPlan[]>([]);

  const { datasetList, setDatasetList, selectDatasetId, setSelectDatasetId } =
    useContext(DatasetModelContext);
  const {
    layerList,
    filterList,
    interactiveList,
    setLayerList,
    setFilterList,
    setInteractiveList,
  } = useContext(ConfigModelContext);

  useMount(() => {
    getDBStore<IPlan[]>('PLAN_LIST').then((newPlanList) => {
      setPlanList(newPlanList || []);
    });
  });

  const columns: ColumnsType<IPlan> = useMemo(
    () => [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '创建时间',
        width: 180,
        dataIndex: 'createTime',
        render: formatDateTime,
      },
      {
        title: '修改时间',
        width: 180,
        dataIndex: 'updateTime',
        render: formatDateTime,
      },
      {
        title: '操作',
        render(plan) {
          return <></>;
        },
      },
    ],
    [],
  );

  const onAdd = () => {
    const currentTime = Date.now();
    const newPlan: IPlan = {
      id: getRandomId('plan'),
      name: generateUnRepeatValue(planList, 'name', '方案'),
      datasets: datasetList,
      layers: layerList,
      filters: filterList,
      interactives: interactiveList,
      createTime: currentTime,
      updateTime: currentTime,
    };
    const newPlanList = [...planList, newPlan];
    setPlanList(newPlanList);
    setDBStore('PLAN_LIST', [...planList, newPlan]);
    message.success('保存成功');
  };

  const footer = useMemo(() => {
    return (
      <div>
        <Button type="primary" onClick={onAdd}>
          保存方案
        </Button>
        <Button onClick={() => setVisible(false)}>关闭</Button>
      </div>
    );
  }, []);

  return (
    <Modal title="方案管理" width="800px" visible={visible} footer={footer}>
      <Table<IPlan> columns={columns} dataSource={planList} />
    </Modal>
  );
};

export default PlanModal;
