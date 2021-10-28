import React, { useCallback, useMemo, useState } from 'react';
import type { IDatasetField, IFilter } from '../../typings';
import styles from './index.less';
import EditName from '../EditName';
import FieldSelect from '../FieldSelect';
import useDataset from '../../hooks/dataset';
import { Dropdown, Menu, Popconfirm, Switch } from 'antd';
import DatasetModal from '../DatasetModal';
import FilterValue from '../AppFilterConfig/FilterValue';
import { useRef } from 'react';

interface IProps {
  filter: IFilter;
  dragIcon: JSX.Element;
  onChange: (newFilter: Partial<IFilter>) => void;
  onEditName: (newName: string, filter: IFilter) => void;
  onCopy: (filter: IFilter) => void;
  onDelete: (filter: IFilter) => void;
}

const FilterItem = ({ filter, onChange, onEditName, onDelete, onCopy, dragIcon }: IProps) => {
  const { getTargetDataset } = useDataset();
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const fields = useMemo(
    () => getTargetDataset(filter.datasetId)?.fields ?? [],
    [getTargetDataset, filter.datasetId],
  );

  const resetFilterProperties: (field: IDatasetField) => Partial<IFilter> = useCallback(
    (field) => {
      const targetDataset = getTargetDataset(filter.datasetId);
      if (!targetDataset) {
        return {};
      }
      if (field.type === 'boolean') {
        return { value: true };
      }
      if (field.type === 'string') {
        return { value: [] };
      }
      if (field.type === 'number') {
        return { value: [...field.range] };
      }
      return {};
    },
    [filter, getTargetDataset],
  );

  return (
    <div>
      <div className={styles.filterItemHeader}>
        {dragIcon}

        <EditName
          name={filter.name}
          className={styles.editName}
          onChange={(newName) => onEditName(newName, filter)}
        />

        <div ref={dropdownRef} className={styles.filterItemMore}>
          <Switch
            size="small"
            checked={filter.enable}
            onChange={(newEnable) =>
              onChange({
                id: filter.id,
                enable: newEnable,
              })
            }
          />

          <Popconfirm title="确认是否删除？" placement="bottom" onConfirm={() => onDelete(filter)}>
            <i className="dpiconfont dpicon-icon_shanchu is-red-link" title="删除" />
          </Popconfirm>

          <Dropdown
            getPopupContainer={() => dropdownRef.current ?? document.body}
            overlay={
              <Menu>
                <Menu.Item
                  key="changeDataset"
                  icon={<i className="dpiconfont dpicon-peizhishujuyuan" />}
                  onClick={() => setVisible(true)}
                >
                  更改数据源
                </Menu.Item>
                <Menu.Item
                  key="copyFilter"
                  icon={<i className="dpiconfont dpicon-fuzhi" />}
                  onClick={() => onCopy(filter)}
                >
                  复制筛选器
                </Menu.Item>
              </Menu>
            }
          >
            <i className="dpiconfont dpicon-more is-link" />
          </Dropdown>
        </div>
      </div>

      <div className={styles.filterItemContent}>
        <div className={styles.filterItemContentRow}>
          <span className={styles.filterItemLabel}>筛选字段：</span>
          <FieldSelect
            size="small"
            bordered={false}
            fields={fields}
            value={filter.field?.name ?? undefined}
            onChange={(_, field) => {
              onChange({
                id: filter.id,
                field,
                ...(field ? resetFilterProperties(field) : {}),
              } as Partial<IFilter>);
            }}
          />
        </div>

        <div className={styles.filterItemContentRow}>
          <FilterValue
            value={filter.value}
            field={filter.field}
            onChange={(newValue) =>
              onChange({
                id: filter.id,
                value: newValue,
              })
            }
          />
        </div>
      </div>

      <DatasetModal
        visible={visible}
        setVisible={setVisible}
        value={filter.datasetId ?? undefined}
        onChange={(datasetId) =>
          onChange({
            id: filter.id,
            datasetId,
          })
        }
      />
    </div>
  );
};

export default FilterItem;
