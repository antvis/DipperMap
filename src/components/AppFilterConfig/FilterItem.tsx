import React, { useCallback, useMemo, useState } from 'react';
import type { IDatasetField, IFilter } from '../../typings';
import EditName from '../EditName';
import FieldSelect from '../FieldSelect';
import useDataset from '../../hooks/dataset';
import { Collapse, Dropdown, Menu, Popconfirm, Switch, Form } from 'antd';
import DatasetModal from '../DatasetModal';
import FilterValue from '../AppFilterConfig/FilterValue';
import { useRef } from 'react';
import { getFilterRange } from '../../utils';

interface IProps {
  filter: IFilter;
  dragIcon: JSX.Element;
  onChange: (newFilter: Partial<IFilter>) => void;
  onEditName: (newName: string, filter: IFilter) => void;
  onCopy: (filter: IFilter) => void;
  onDelete: (filter: IFilter) => void;
}

const { Panel } = Collapse;

const FilterItem = ({
  filter,
  onChange,
  onEditName,
  onDelete,
  onCopy,
  dragIcon,
}: IProps) => {
  const { getTargetDataset } = useDataset();
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { getDatasetMarkStyle } = useDataset();

  const fields = useMemo(
    () => getTargetDataset(filter.datasetId)?.fields ?? [],
    [getTargetDataset, filter.datasetId],
  );

  const resetFilterProperties: (field: IDatasetField) => Partial<IFilter> =
    useCallback(
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
          return { value: getFilterRange(field.range) };
        }
        return {};
      },
      [filter, getTargetDataset],
    );

  const header = (
    <div
      className="editItemHeader"
      style={getDatasetMarkStyle(filter.datasetId)}
      onClick={(e) => e.stopPropagation()}
    >
      {dragIcon}

      <EditName
        name={filter.name}
        className="editName"
        onChange={(newName) => onEditName(newName, filter)}
      />

      <div ref={dropdownRef} className="editItemMore">
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

        <Dropdown
          overlay={
            <Menu className="operateDropdown">
              <Menu.Item key="changeDataset" onClick={() => setVisible(true)}>
                <i className="dpiconfont dpicon-genggaishujuyuan" />
                更改数据源
              </Menu.Item>
              <Menu.Item key="copyFilter" onClick={() => onCopy(filter)}>
                <i className="dpiconfont dpicon-fuzhi1" />
                复制筛选器
              </Menu.Item>
              <Popconfirm
                title="确认是否删除？"
                placement="bottom"
                onConfirm={() => onDelete(filter)}
              >
                <Menu.Item key="delete">
                  <i className="dpiconfont dpicon-shanchu is-red-link" />
                  删除
                </Menu.Item>
              </Popconfirm>
            </Menu>
          }
        >
          <i className="dpiconfont dpicon-gengduo is-link" />
        </Dropdown>
      </div>
    </div>
  );

  const content = (
    <div className="editItemContent">
      <Form.Item
        label="筛选字段"
        labelCol={{ span: 24 }}
        colon={false}
        className="titleFormItem"
      >
        <FieldSelect
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
      </Form.Item>

      <Form.Item
        label="筛选数值"
        labelCol={{ span: 24 }}
        colon={false}
        className="titleFormItem"
      >
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
      </Form.Item>
    </div>
  );

  return (
    <div>
      <Collapse ghost defaultActiveKey={[filter.id]} expandIconPosition="right">
        <Panel key={filter.id} header={header}>
          {content}
        </Panel>
      </Collapse>

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
