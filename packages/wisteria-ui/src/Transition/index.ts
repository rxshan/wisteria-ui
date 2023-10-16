import './style/index.scss';
import { Ripple } from './Ripple';
import { Collapse } from './Collapse';
import { withTransition } from './withAnimate';
import { Transition as Animate } from './Transition';

const Zoom = withTransition('zoom');
const Fade = withTransition('fade');

const Transition = Object.assign(Animate, {
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
export type { PhaseStatus, TransitionProps, CollapseProps } from './interface';
