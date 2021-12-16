import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './index.less';
import classnames from 'classnames';
import { useThrottleFn } from 'ahooks';
import { useLocalStorageState } from 'ahooks';
import { LOCAL_STORAGE_KEY } from '../../constants';

interface IProps {
  top: (style: CSSProperties) => JSX.Element;
  bottom: (style: CSSProperties) => JSX.Element;
}

const MIN_DATASET_PANEL_HEIGHT = 190;

const MIN_EDIT_PANEL_HEIGHT = 240;

const ResizePanel: React.FC<IProps> = ({ top, bottom }) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [datasetPanelHeight, setDatasetPanelHeight] = useLocalStorageState(
    LOCAL_STORAGE_KEY.DATASET_PANEL_HEIGHT,
    MIN_DATASET_PANEL_HEIGHT,
  );
  const [isDrag, setIsDrag] = useState(false);

  const { run: onDragging } = useThrottleFn(
    (e: MouseEvent) => {
      if (!isDrag) {
        return;
      }
      const { clientY: mouseTop } = e;
      const { top: panelTop = 0, height: panelHeight = 0 } =
        panelRef.current?.getBoundingClientRect() ?? {};
      let computeHeight = mouseTop - panelTop;
      if (computeHeight < MIN_DATASET_PANEL_HEIGHT) {
        computeHeight = MIN_DATASET_PANEL_HEIGHT;
      } else if (
        panelHeight - (computeHeight + panelTop) <
        MIN_EDIT_PANEL_HEIGHT
      ) {
        computeHeight = panelHeight - panelTop - MIN_EDIT_PANEL_HEIGHT;
      }
      setDatasetPanelHeight(computeHeight);
    },
    {
      wait: 30,
    },
  );

  const onDragEnd = useCallback(() => {
    if (!isDrag) {
      return;
    }
    setIsDrag(false);
    if (panelRef.current) {
      panelRef.current.style.cursor = '';
    }
  }, [isDrag, panelRef]);

  const onVisibilityChange = useCallback(() => {
    if (document.visibilityState === 'hidden') {
      onDragEnd();
    }
  }, [onDragEnd]);

  useEffect(() => {
    window.addEventListener('mousemove', onDragging);
    window.addEventListener('mouseup', onDragEnd);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('blur', onDragEnd);
    return () => {
      window.removeEventListener('mousemove', onDragging);
      window.removeEventListener('mouseup', onDragEnd);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('blur', onDragEnd);
    };
  }, [onDragging, onDragEnd, onVisibilityChange]);

  const onDragStart = useCallback(() => {
    if (isDrag) {
      return;
    }
    setIsDrag(true);
    if (panelRef.current) {
      panelRef.current.style.cursor = 'move';
    }
  }, [isDrag]);

  return (
    <div ref={panelRef} className={styles.resizePanel}>
      {top({
        height: datasetPanelHeight,
      })}
      <div
        className={classnames({
          [styles.resizeLine]: true,
          [styles.resizeLineActive]: isDrag,
        })}
      >
        <div
          className={styles.resizeDragLine}
          onMouseDown={() => onDragStart()}
        />
      </div>
      {bottom({
        height: `calc(100% - ${datasetPanelHeight}px)`,
      })}
    </div>
  );
};

export default ResizePanel;
