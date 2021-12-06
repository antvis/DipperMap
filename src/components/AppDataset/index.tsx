import React, { useCallback, useContext, useState } from 'react';
import styles from './index.less';
import { Button, message, Popconfirm, Spin, Tooltip } from 'antd';
import AddDatasetModal from './AddDatasetModal';
import DatasetList from './DatasetList';
import { ClearOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { DatasetModelContext } from '../../context/DatasetContext';
import { ConfigModelContext } from '../../context/ConfigContext';

const AppDataset: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [addDatasetVisible, setAddDatasetVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setDatasetList } = useContext(DatasetModelContext);
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
                <Tooltip overlay="清空">
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
                    icon={<PlusSquareOutlined />}
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
