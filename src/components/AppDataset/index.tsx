import React, { useCallback, useContext, useState } from 'react';
import styles from './index.less';
import { Button, message, Popconfirm, Spin, Tooltip } from 'antd';
import AddDatasetModal from './AddDatasetModal';
import DatasetList from './DatasetList';
import { ClearOutlined, FileAddOutlined } from '@ant-design/icons';
import { DatasetModelContext } from '../../context/DatasetContext';
import { ConfigModelContext } from '../../context/ConfigContext';

const AppDataset: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [loading, setLoading] = useState(false);

  const { datasetList, setDatasetList } = useContext(DatasetModelContext);
  const [addDatasetVisible, setAddDatasetVisible] = useState(
    !datasetList.length,
  );
  const { setLayerList, setFilterList, setInteractiveList } =
    useContext(ConfigModelContext);

  const onClear = useCallback(() => {
    setDatasetList([]);
    setLayerList([]);
    setFilterList([]);
    setInteractiveList([]);
    message.success('清空成功');
  }, [setDatasetList, setLayerList, setFilterList, setInteractiveList]);

  return (
    <div className={styles.appDataset} style={style}>
      <div className={styles.appDatasetHeader}>
        <div className={styles.appDatasetHeaderTitle}>数据源</div>
        <div className={styles.appDatasetHeaderBtnGroup}>
          <Tooltip overlay="添加数据源">
            {loading ? (
              <Spin spinning />
            ) : (
              <>
                <Tooltip overlay="清空数据源">
                  <Popconfirm
                    title="确认清空当前数据源及所有配置?"
                    onConfirm={onClear}
                  >
                    <Button
                      type="text"
                      className="is-link"
                      icon={<ClearOutlined />}
                    />
                  </Popconfirm>
                </Tooltip>

                <Tooltip overlay="添加数据源">
                  <Button
                    type="text"
                    className="is-link"
                    icon={<FileAddOutlined />}
                    onClick={() => setAddDatasetVisible(true)}
                  />
                </Tooltip>
              </>
            )}
          </Tooltip>
        </div>
      </div>
      <DatasetList className={styles.appDatasetContent} />
      <AddDatasetModal
        visible={addDatasetVisible}
        setVisible={setAddDatasetVisible}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default AppDataset;
