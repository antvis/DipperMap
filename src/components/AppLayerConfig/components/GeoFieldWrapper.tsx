import React from 'react';
import { IDataset } from '../../../typings';

interface IProps {
  dataset?: IDataset | null;
}

const GeoFieldWrapper: React.FC<IProps> = ({ children, dataset }) => {
  if (dataset?.geoJson?.enable) {
    return <></>;
  }
  return <>{children}</>;
};

export default GeoFieldWrapper;
