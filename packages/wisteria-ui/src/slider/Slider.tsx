import type { FunctionComponent } from 'preact';
import { SliderTrack } from './SliderTrack';
import { SliderThumb } from './SliderThumb';
import { useEventListener } from '../hooks';

export const Slider: FunctionComponent = () => {
  useEventListener('mouseup', () => {});
  useEventListener('mousedown', () => {});

  return (
    <div style={{ position: 'relative' }}>
      <SliderTrack />
      <SliderThumb />
    </div>
  );
};
