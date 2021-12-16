import React, { useCallback, useContext, useState } from 'react';
import styles from './index.less';
import { Button, Dropdown, Menu, message } from 'antd';
import {
  QuestionCircleOutlined,
  DatabaseOutlined,
  ExportOutlined,
  ImportOutlined,
} from '@ant-design/icons';
import { HELP_LINK_LIST, HOME_PAGE_URL } from '../../constants';
import { DatasetModelContext } from '../../context/DatasetContext';
import { LayerModelContext } from '../../context/LayerContext';
import { FilterModelContext } from '../../context/FilterContext';
import { InteractiveModelContext } from '../../context/InteractiveContext';
import { MapModelContext } from '../../context/MapContext';
import { IPlan } from '../../typings';
import { downloadFile, getRandomId } from '../../utils';
import ImportPlanModal from './ImportPlanModal';
import usePlan from '../../hooks/usePlan';

const AppHeader: React.FC = () => {
  const { datasetList } = useContext(DatasetModelContext);
  const { layerList } = useContext(LayerModelContext);
  const { filterList } = useContext(FilterModelContext);
  const { interactiveList } = useContext(InteractiveModelContext);
  const { mapConfig } = useContext(MapModelContext);
  const { onImportPlan } = usePlan();

  const [importPlanModal, setImportPlanModal] = useState(false);

  const onExport = useCallback(() => {
    const plan: IPlan = {
      id: getRandomId('plan'),
      exportDatasetList: datasetList
        .filter((item) => item.url)
        .map((item) => ({
          src: item.url as string,
          datasetId: item.id,
          name: item.name,
        })),
      datasetList: datasetList.filter((item) => !item.url),
      layerList,
      filterList,
      interactiveList,
      mapConfig,
    };
    downloadFile(JSON.stringify(plan), '方案.json');
  }, [datasetList, filterList, interactiveList, layerList, mapConfig]);

  const onImport = useCallback(
    async (plan: IPlan) => {
      await onImportPlan(plan);
      message.success('导入成功');
    },
    [onImportPlan],
  );

  return (
    <>
      <div className={styles.appHeader}>
        <a href={HOME_PAGE_URL} target="_blank" rel="noreferrer">
          <img
            src="https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*95whQ7WhQBIAAAAAAAAAAAAAARQnAQ"
            alt=""
          />
        </a>
        <div className={styles.appHeaderBtnGroup}>
          <Dropdown
            placement="bottomLeft"
            overlay={
              <Menu>
                <Menu.Item
                  key="importPlan"
                  icon={<ImportOutlined />}
                  onClick={() => setImportPlanModal(true)}
                >
                  导入方案
                </Menu.Item>
                <Menu.Item
                  key="exportPlan"
                  icon={<ExportOutlined />}
                  onClick={onExport}
                >
                  导出方案
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="text" icon={<DatabaseOutlined />} />
          </Dropdown>
          <Dropdown
            placement="bottomLeft"
            overlay={
              <Menu>
                {HELP_LINK_LIST.map((item) => (
                  <Menu.Item
                    key={item.title}
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    <span>{item.title}</span>
                    <i className="dpiconfont dpicon-tiaozhuan-zhuanqu" />
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button type="text" icon={<QuestionCircleOutlined />} />
          </Dropdown>
        </div>
      </div>
      <ImportPlanModal
        visible={importPlanModal}
        setVisible={setImportPlanModal}
        onSubmit={onImport}
      />
    </>
  );
};

export default AppHeader;
