import React, { useState, useRef, useMemo } from 'react';
import { Collapse, Dropdown, Menu, Popconfirm, Switch } from 'antd';
import type { ILayer } from '../../typings';
import EditName from '../EditName';
import DatasetModal from '../DatasetModal';
import PointLayer from './PointLayer';
import LineLayer from './LineLayer';
import TripLayer from './TripLayer';
import PolygonLayer from './PolygonLayer';
import HexLayer from './HexLayer';
import HeatLayer from './HeatLayer';

const { Panel } = Collapse;

interface IProps {
  layer: ILayer;
  dragIcon: JSX.Element;
  onChange: (newLayer: Partial<ILayer>) => void;
  onEditName: (newName: string, layer: ILayer) => void;
  onCopy: (layer: ILayer) => void;
  onDelete: (layer: ILayer) => void;
}

const LayerItemConfig = ({
  layer,
  onEditName,
  dragIcon,
  onChange,
  onDelete,
  onCopy,
}: IProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const header = (
    <div className="editItemHeader" onClick={(e) => e.stopPropagation()}>
      {dragIcon}
      <EditName
        name={layer.name}
        className="editName"
        onChange={(newName) => onEditName(newName, layer)}
      />
      <div ref={dropdownRef} className="editItemMore">
        <Switch
          size="small"
          checked={layer.visible}
          onChange={(newVisible) =>
            onChange({
              id: layer.id,
              visible: newVisible,
            })
          }
        />

        <Dropdown
          getPopupContainer={() => dropdownRef.current ?? document.body}
          overlay={
            <Menu>
              <Menu.Item key="changeDataset" onClick={() => setVisible(true)}>
                <i className="dpiconfont dpicon-peizhishujuyuan" />
                更改数据源
              </Menu.Item>
              <Menu.Item key="copyLayer" onClick={() => onCopy(layer)}>
                <i className="dpiconfont dpicon-fuzhi" />
                复制图层
              </Menu.Item>
              <Popconfirm
                title="确认是否删除？"
                placement="bottom"
                onConfirm={() => onDelete(layer)}
              >
                <Menu.Item>
                  <i className="dpiconfont dpicon-icon_shanchu is-red-link" />
                  删除
                </Menu.Item>
              </Popconfirm>
            </Menu>
          }
        >
          <i className="dpiconfont dpicon-more is-link" />
        </Dropdown>
      </div>
    </div>
  );

  const content = useMemo(() => {
    switch (layer.type) {
      case 'point':
        return <PointLayer layer={layer} onChange={onChange} />;

      case 'line':
        return <LineLayer layer={layer} onChange={onChange} />;

      case 'trip':
        return <TripLayer layer={layer} onChange={onChange} />;

      case 'polygon':
        return <PolygonLayer layer={layer} onChange={onChange} />;

      case 'hex':
        return <HexLayer layer={layer} onChange={onChange} />;

      case 'heat':
        return <HeatLayer layer={layer} onChange={onChange} />;

      default:
        return <></>;
    }
  }, [layer, onChange]);

  return (
    <>
      <Collapse ghost defaultActiveKey={[layer.id]} expandIconPosition="right">
        <Panel key={layer.id} header={header}>
          {content}
        </Panel>
      </Collapse>

      <DatasetModal
        visible={visible}
        setVisible={setVisible}
        value={layer.datasetId ?? undefined}
        onChange={(datasetId) =>
          onChange({
            id: layer.id,
            datasetId,
          })
        }
      />
    </>
  );
};

export default LayerItemConfig;
