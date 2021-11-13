import React, { useMemo } from 'react';
import type { IInteractive } from '../../typings';
import styles from './index.less';
import EditName from '../EditName';
import FieldSelect from '../FieldSelect';
import useDataset from '../../hooks/dataset';
import { Popconfirm, Switch } from 'antd';
import { useRef } from 'react';

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

  const fields = useMemo(
    () => getTargetDataset(interactive.datasetId)?.fields ?? [],
    [getTargetDataset, interactive.datasetId],
  );

  return (
    <div>
      <div className={styles.interactiveItemHeader}>
        {dragIcon}

        <EditName
          name={interactive.name}
          className={styles.editName}
          onChange={(newName) => onEditName(newName, interactive)}
        />

        <div ref={dropdownRef} className={styles.interactiveItemMore}>
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
            <i
              className="dpiconfont dpicon-icon_shanchu is-red-link"
              title="删除"
            />
          </Popconfirm>
        </div>
      </div>
      <div
        style={{ display: interactive.enable ? undefined : 'none' }}
        className={styles.interactiveItemContent}
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
      </div>
    </div>
  );
};

export default InteractiveItem;
