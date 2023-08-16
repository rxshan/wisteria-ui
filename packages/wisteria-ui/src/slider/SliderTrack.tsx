import type { FunctionComponent } from 'preact';
import { createPrefixClass } from '../utils';

const classnames = createPrefixClass('slider-track');

export const SliderTrack: FunctionComponent = () => {
  return <span className={classnames()} />;
};
