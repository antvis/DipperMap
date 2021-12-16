import React, { useCallback, useContext } from 'react';
import styles from './index.less';
import { Button, Dropdown, Menu } from 'antd';
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
import { getRandomId } from '../../utils';

const AppHeader: React.FC = () => {
  const { datasetList, setDatasetList } = useContext(DatasetModelContext);
  const { layerList, setLayerList } = useContext(LayerModelContext);
  const { filterList, setFilterList } = useContext(FilterModelContext);
  const { interactiveList, setInteractiveList } = useContext(
    InteractiveModelContext,
  );
  const { mapConfig, setMapConfig } = useContext(MapModelContext);

  const onImport = useCallback(() => {
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
    };
  }, [datasetList, filterList, interactiveList, layerList]);

  const onExport = useCallback(() => {}, []);

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
          {/* TODO: 具体Dropdown的实现 */}
          <Dropdown
            placement="bottomLeft"
            overlay={
              <Menu>
                <Menu.Item
                  key="importPlan"
                  icon={<ImportOutlined />}
                  onClick={onImport}
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
    </>
  );
};

export default AppHeader;
