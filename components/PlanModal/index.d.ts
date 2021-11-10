import React from 'react';
import { ModalProps } from 'antd/lib/modal/Modal';
interface IProps extends ModalProps {
    setVisible: (newValue: boolean) => void;
}
declare const PlanModal: React.FC<IProps>;
export default PlanModal;
