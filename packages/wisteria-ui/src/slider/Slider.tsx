import type { FunctionComponent } from 'preact';
import { SliderTrack } from './SliderTrack';
import { SliderThumb } from './SliderThumb';

export const Slider: FunctionComponent = () => {
  return (
    <div style={{ position: 'relative' }}>
      <SliderTrack />
      <SliderThumb />
    </div>
  );
};
