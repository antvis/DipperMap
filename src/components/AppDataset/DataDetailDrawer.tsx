import React, { useState, useEffect } from 'react';
import { Button, DrawerProps, Tooltip } from 'antd';
import { Drawer, Tabs, Table } from 'antd';
import type { IDataset } from '../../typings';
import dayjs from 'dayjs';
import styles from './index.less';
import TypeTag from '../TypeTag';
import DownloadDatasetModal from './DownloadDatasetModal';

interface IProps extends DrawerProps {
  currentDatasetId: string;
  datasetList: IDataset[];
}

const { TabPane } = Tabs;

const DataDetailDrawer = ({
  currentDatasetId,
  datasetList,
  visible,
  ...drawProps
}: IProps) => {
  const [currentTab, setCurrentTab] = useState(currentDatasetId);
  const [downloadModal, setDownloadModal] = useState<{
    visible: boolean;
    dataset?: IDataset | null;
  }>({
    visible: false,
    dataset: null,
  });

  useEffect(() => {
    setCurrentTab(currentDatasetId);
  }, [visible, currentDatasetId]);

  return (
    <>
      <Drawer
        {...drawProps}
        visible={visible}
        bodyStyle={{ padding: 0 }}
        placement="bottom"
        height={540}
        className={styles.datasetDetailDrawer}
      >
        <Tabs
          activeKey={currentTab}
          onChange={setCurrentTab}
          destroyInactiveTabPane={true}
        >
          {datasetList.map((dataset) => (
            <TabPane tab={dataset.name} key={dataset.id}>
              <Table
                dataSource={dataset.data}
                rowKey="id"
                columns={dataset.fields.map((item) => {
                  return {
                    key: item.name,
                    dataIndex: item.name,
                    width: 150,
                    render(value) {
                      return (
                        <Tooltip title={value}>
                          <span className={styles.clamp}>{value}</span>
                        </Tooltip>
                      );
                    },
                    title() {
                      return (
                        <div className={styles.tableTh}>
                          <TypeTag type={item.type} />
                          <span title={item.name}>{item.name}</span>
                        </div>
                      );
                    },
                  };
                })}
                scroll={{ y: 380 }}
              />
              <span className={styles.datasetExtraInfo}>
                <Button
                  style={{ marginRight: 16 }}
                  onClick={() =>
                    setDownloadModal({
                      visible: true,
                      dataset,
                    })
                  }
                >
                  导出数据
                </Button>
                <span>
                  创建时间：
                  {dayjs(dataset.createTime).format('YYYY-MM-DD HH:mm:ss')}
                </span>
              </span>
            </TabPane>
          ))}
        </Tabs>
      </Drawer>
      <DownloadDatasetModal
        dataset={downloadModal.dataset}
        visible={downloadModal.visible}
        setVisible={(visible) =>
          setDownloadModal((newDownloadModal) => ({
            ...newDownloadModal,
            visible,
          }))
        }
      />
    </>
  );
};

export default DataDetailDrawer;
