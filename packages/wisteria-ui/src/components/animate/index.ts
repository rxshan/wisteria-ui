import './style/index.scss';
import { withAnimate } from './withAnimate';
import { Transition as _Transition } from './Transition';

const Zoom = withAnimate('zoom');
const Fade = withAnimate('fade');

const Animate = Object.assign(_Transition, {
  Fade,
  Zoom
});

Fade.displayName = 'WisFade';
Zoom.displayName = 'WisZoom';
Animate.displayName = 'WisTransition';

export { Animate };
export type { AnimateProps } from './types';
