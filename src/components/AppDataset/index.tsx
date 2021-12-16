import React, { useCallback, useContext, useState } from 'react';
import styles from './index.less';
import { Button, message, Popconfirm, Spin, Tooltip } from 'antd';
import AddDatasetModal from './AddDatasetModal';
import DatasetList from './DatasetList';
import { ClearOutlined, FileAddOutlined } from '@ant-design/icons';
import { DatasetModelContext } from '../../context/DatasetContext';
import { LayerModelContext } from '../../context/LayerContext';
import { FilterModelContext } from '../../context/FilterContext';
import { InteractiveModelContext } from '../../context/InteractiveContext';

const AppDataset: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [loading, setLoading] = useState(false);

  const { setDatasetList } = useContext(DatasetModelContext);
  const [addDatasetVisible, setAddDatasetVisible] = useState(false);
  const { setLayerList } = useContext(LayerModelContext);
  const { setFilterList } = useContext(FilterModelContext);
  const { setInteractiveList } = useContext(InteractiveModelContext);

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
                <Tooltip overlay="清空数据源" placement="bottom">
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

                <Tooltip overlay="添加数据源" placement="bottom">
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
