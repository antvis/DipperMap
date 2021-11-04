import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.less';
import { useMount } from 'ahooks';
import { LOCAL_STORAGE_KEY } from '@/constants';
import classnames from 'classnames';

interface IProps {
  sidebarRef: React.MutableRefObject<HTMLDivElement | null>;
  sidebarHeaderRef: React.MutableRefObject<HTMLDivElement | null>;
  TopComponent: React.FC<{ style?: React.CSSProperties }>;
  BottomComponent: React.FC<{ style?: React.CSSProperties }>;
}

const AppDragPanel: React.FC<IProps> = ({
  TopComponent,
  BottomComponent,
  sidebarRef,
  sidebarHeaderRef,
}) => {
  const dragPanelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const [topHeight, setTopHeight] = useState(() => {
    const newTopHeight = localStorage.getItem(
      LOCAL_STORAGE_KEY.TOP_PANEL_HEIGHT,
    );
    return newTopHeight ? +newTopHeight : 0;
  });
  const [isDrag, setIsDrag] = useState(false);

  useEffect(() => {
    if (topHeight) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.TOP_PANEL_HEIGHT,
        String(topHeight),
      );
    }
  }, [topHeight]);

  const onSidebarResize = useCallback(() => {
    const sidebarHeight = sidebarRef.current?.offsetHeight ?? 0;
    const sidebarHeaderHeight = sidebarHeaderRef.current?.offsetHeight ?? 0;
    const newPanelHeight = sidebarHeight - sidebarHeaderHeight;
    setPanelHeight(newPanelHeight);
    if (!topHeight || topHeight > newPanelHeight) {
      setTopHeight(newPanelHeight / 2);
    }
  }, [sidebarRef.current, sidebarHeaderRef.current, panelHeight]);

  useEffect(() => {
    if (sidebarRef.current && sidebarHeaderRef.current) {
      sidebarRef.current?.addEventListener('resize', onSidebarResize);
    }
    return sidebarRef.current?.removeEventListener('resize', onSidebarResize);
  }, [sidebarRef.current, sidebarHeaderRef.current, onSidebarResize]);

  const onDragMove = useCallback(
    (e) => {
      // if (isDrag) {
      //   const newTopHeight =
      //     e.clientY -
      //     (dragPanelRef.current
      //       ? getElementToPageTop(dragPanelRef.current)
      //       : 0);
      //   setTopHeight(newTopHeight);
      // }
    },
    [isDrag, sidebarRef.current],
  );

  const onDragUp = useCallback(() => {
    setIsDrag(false);
  }, []);

  useMount(() => {
    onSidebarResize();
  });

  useEffect(() => {
    if (isDrag) {
      window.addEventListener('mousemove', onDragMove);
      window.addEventListener('mouseup', onDragUp);
    }
    return () => {
      window.removeEventListener('mousemove', onDragMove);
      window.removeEventListener('mouseup', onDragUp);
    };
  }, [onDragMove, onDragUp, isDrag]);

  const onDragStart = useCallback(() => {
    setIsDrag(true);
  }, []);

  return (
    <div
      ref={dragPanelRef}
      className={styles.appDragPanel}
      style={{ height: panelHeight }}
    >
      <TopComponent style={{ height: topHeight }} />
      <div className={styles.appDragDragLine}>
        <div
          className={classnames({
            [styles.appDragDragPanel]: true,
            [styles.appDragDragPanelActive]: isDrag,
          })}
          onMouseDown={onDragStart}
        />
      </div>
      <BottomComponent style={{ height: panelHeight - topHeight }} />
    </div>
  );
};

export default AppDragPanel;