import React, { useContext, useState } from 'react';
import { Button, message, Modal, Popconfirm, Table, Tooltip } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';
import { ColumnsType } from 'antd/lib/table/interface';
import { IPlan } from '../../typings';
import { DatasetModelContext } from '../../context/DatasetContext';
import { ConfigModelContext } from '../../context/ConfigContext';
import { GlobalModelContext } from '../../context/GlobalContext';
import { MapModelContext } from '../../context/MapContext';
import { SaveOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  formatDateTime,
  generateUnRepeatValue,
  getDBStore,
  getRandomId,
  setDBStore,
} from '../../utils';
import { useMount } from 'ahooks';

interface IProps extends ModalProps {
  setVisible: (newValue: boolean) => void;
}

const PlanModal: React.FC<IProps> = ({ visible, setVisible }) => {
  const [planList, setPlanList] = useState<IPlan[]>([]);
  const { selectPlan, setSelectPlan } = useContext(GlobalModelContext);
  const { mapTheme, setMapTheme } = useContext(MapModelContext);

  const { datasetList, setDatasetList } = useContext(DatasetModelContext);
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
      getDBStore<string | null>('SELECT_PLAN_ID').then((selectPlanId) => {
        if (!selectPlanId) {
          return;
        }
        const targetPlan = newPlanList.find((plan) => plan.id === selectPlanId);
        if (targetPlan) {
          setSelectPlan(targetPlan);
          onEdit(targetPlan);
        }
      });
    });
  });

  const updatePlanList = (newPlanList: IPlan[]) => {
    setPlanList(newPlanList);
    setDBStore('PLAN_LIST', newPlanList);
  };

  const onAdd = () => {
    const currentTime = Date.now();
    const newPlan: IPlan = {
      id: getRandomId('plan'),
      name: generateUnRepeatValue(planList, 'name', '方案'),
      mapTheme,
      datasets: datasetList,
      layers: layerList,
      filters: filterList,
      interactives: interactiveList,
      createTime: currentTime,
      updateTime: currentTime,
    };
    updatePlanList([...planList, newPlan]);
    setSelectPlan(newPlan);
    message.success('新增成功');
  };

  const onEdit = (plan: IPlan | null, authClose = false) => {
    if (plan) {
      const { mapTheme, layers, filters, interactives, datasets } = plan;
      setMapTheme(mapTheme);
      setDatasetList(datasets);
      setLayerList(layers);
      setFilterList(filters);
      setInteractiveList(interactives);
      message.success('读取成功');
    }
    setSelectPlan(plan);
    setDBStore('SELECT_PLAN_ID', plan?.id || '');
    if (authClose) {
      setVisible(false);
    }
  };

  const onUpdate = (plan: IPlan) => {
    const newPlanList = [...planList];
    const targetPlan = newPlanList.find((item) => item.id === plan.id);
    if (targetPlan) {
      Object.assign(targetPlan, {
        mapTheme,
        datasets: datasetList,
        layers: layerList,
        filters: filterList,
        interactives: interactiveList,
        updateTime: Date.now(),
      });
      updatePlanList(newPlanList);
      message.success('保存成功');
    }
  };

  const onDelete = (plan: IPlan) => {
    const newPlanList = [...planList];
    const targetIndex = newPlanList.findIndex((item) => item.id === plan.id);
    if (targetIndex > -1) {
      newPlanList.splice(targetIndex, 1);
      updatePlanList(newPlanList);
      message.success('删除成功');
      if (plan.id === selectPlan?.id) {
        onEdit(null);
      }
    }
  };

  const columns: ColumnsType<IPlan> = [
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
      width: 160,
      render(plan) {
        return (
          <>
            <Tooltip overlay="读取方案">
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => onEdit(plan, true)}
              />
            </Tooltip>
            <Tooltip overlay="保存至当前方案">
              <Button
                type="link"
                icon={<SaveOutlined />}
                onClick={() => onUpdate(plan)}
              />
            </Tooltip>
            <Tooltip overlay="删除方案" placement="bottom">
              <Popconfirm
                title="确认删除此方案?"
                onConfirm={() => onDelete(plan)}
              >
                <Button type="link" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Tooltip>
          </>
        );
      },
    },
  ];

  const footer = (
    <div>
      <Button type="primary" onClick={onAdd}>
        新建方案
      </Button>
      <Button onClick={() => setVisible(false)}>关闭</Button>
    </div>
  );

  return (
    <Modal title="方案管理" width="800px" visible={visible} footer={footer}>
      <Table<IPlan>
        columns={columns}
        dataSource={planList}
        rowKey="id"
        rowSelection={{
          type: 'radio',
          selectedRowKeys: selectPlan?.id ? [selectPlan?.id] : undefined,
          onChange: (selectedRowKeys, selectedRows) => {
            if (selectedRows.length) {
              onEdit(selectedRows[0]);
            }
          },
        }}
        pagination={false}
      />
    </Modal>
  );
};

export default PlanModal;
