import './style/index.scss';
import { Ripple } from './Ripple';
import { Collapse } from './Collapse';
import { withAnimate } from './withAnimate';
import { Transition as _Animate } from './Transition';

const Zoom = withAnimate('zoom');
const Fade = withAnimate('fade');

const Transition = Object.assign(_Animate, {
  Fade,
  Zoom,
  Ripple,
  Collapse
});

Fade.displayName = 'WisteriaUI.Fade';
Zoom.displayName = 'WisteriaUI.Zoom';
Transition.displayName = 'WisteriaUI.Transition';
Collapse.displayName = 'WisteriaUI.Collapse';

export { Transition };
export type { TransitionProps, CollapseProps } from './interface';
