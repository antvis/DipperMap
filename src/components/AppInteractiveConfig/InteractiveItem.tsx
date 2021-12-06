import React, { useMemo } from 'react';
import type { IInteractive } from '../../typings';
import EditName from '../EditName';
import FieldSelect from '../FieldSelect';
import useDataset from '../../hooks/dataset';
import { Collapse, Popconfirm, Switch, Form } from 'antd';
import { useRef } from 'react';
import styles from './index.less';

const { Panel } = Collapse;

interface IProps {
  interactive: IInteractive;
  dragIcon: JSX.Element;
  onChange: (newInteractive: Partial<IInteractive>) => void;
  onEditName: (newName: string, interactive: IInteractive) => void;
  onDelete: (interactive: IInteractive) => void;
}

const InteractiveItem = ({
  interactive,
  onChange,
  onEditName,
  onDelete,
  dragIcon,
}: IProps) => {
  const { getTargetDataset } = useDataset();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { getDatasetMarkStyle } = useDataset();

  const fields = useMemo(
    () => getTargetDataset(interactive.datasetId)?.fields ?? [],
    [getTargetDataset, interactive.datasetId],
  );

  const header = (
    <div
      className="editItemHeader"
      style={getDatasetMarkStyle(interactive.datasetId)}
      onClick={(e) => e.stopPropagation()}
    >
      {dragIcon}

      <EditName
        name={interactive.name}
        className="editName"
        onChange={(newName) => onEditName(newName, interactive)}
      />

      <div ref={dropdownRef} className="editItemMore">
        <Switch
          size="small"
          checked={interactive.enable}
          onChange={(newEnable) =>
            onChange({
              id: interactive.id,
              enable: newEnable,
            })
          }
        />

        <Popconfirm
          title="确认是否删除？"
          placement="bottom"
          onConfirm={() => onDelete(interactive)}
        >
          <i className="dpiconfont dpicon-shanchu is-red-link" title="删除" />
        </Popconfirm>
      </div>
    </div>
  );

  const content = (
    <div style={{ display: interactive.enable ? undefined : 'none' }}>
      <Form.Item
        label="展示字段"
        className="titleFormItem"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <FieldSelect
          style={{ width: '100%' }}
          mode="multiple"
          value={interactive.fields}
          fields={fields}
          allowClear
          onChange={(newFields) =>
            onChange({
              ...interactive,
              fields: Array.isArray(newFields) ? newFields : [],
            })
          }
        />
      </Form.Item>
    </div>
  );

  return (
    <Collapse
      ghost
      defaultActiveKey={[interactive.id]}
      expandIconPosition="right"
    >
      <Panel
        className={styles.interactiveItem}
        key={interactive.id}
        header={header}
      >
        {content}
      </Panel>
    </Collapse>
  );
};

export default InteractiveItem;
