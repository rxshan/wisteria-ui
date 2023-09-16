import './style/index.scss';
import { Collapse } from './Collapse';
import { withAnimate } from './withAnimate';
import { Animate as _Animate } from './Animate';

const Zoom = withAnimate('zoom');
const Fade = withAnimate('fade');

const Animate = Object.assign(_Animate, {
  Fade,
  Zoom,
  Collapse
});

Fade.displayName = 'WisFade';
Zoom.displayName = 'WisZoom';
Animate.displayName = 'WisTransition';
Collapse.displayName = 'WisCollapse';

export { Animate };
export type { AnimateProps, CollapseProps } from './types';
