import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.less';
import containerStyles from '../../container/index.less';
import { useMount } from 'ahooks';
import { LOCAL_STORAGE_KEY } from '../../constants';
import classnames from 'classnames';
import { getRealOffsetTop } from '../../utils';

interface IProps {
  sidebarRef: React.MutableRefObject<HTMLDivElement | null>;
  sidebarHeaderRef: React.MutableRefObject<HTMLDivElement | null>;
  TopComponent: React.FC<{ style?: React.CSSProperties }>;
  BottomComponent: React.FC<{ style?: React.CSSProperties }>;
  className?: string;
}

const AppDragPanel: React.FC<IProps> = ({
  TopComponent,
  BottomComponent,
  sidebarRef,
  sidebarHeaderRef,
  className,
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
      if (isDrag) {
        debugger;
        const container = document.querySelector(
          `.${containerStyles.container}`,
        );
        if (container) {
          setTopHeight(e.clientY - panelHeight - getRealOffsetTop(container));
        }
      }
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
      className={classnames([styles.appDragPanel, className])}
      // style={{ height: panelHeight }}
    >
      <TopComponent />
      <div className={styles.appDragDragLine}>
        <div
          className={classnames({
            [styles.appDragDragPanel]: true,
            [styles.appDragDragPanelActive]: isDrag,
          })}
          // onMouseDown={onDragStart}
        />
      </div>
      <BottomComponent />
    </div>
  );
};

export default AppDragPanel;
