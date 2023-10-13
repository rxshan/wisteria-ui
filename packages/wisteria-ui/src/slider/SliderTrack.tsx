import type { FunctionComponent } from 'preact';
import { createCssClass } from '@wisteria-ui/utilities';

const [selfClass] = createCssClass('slider-track');

export const SliderTrack: FunctionComponent = () => {
  return <span className={selfClass} />;
};
