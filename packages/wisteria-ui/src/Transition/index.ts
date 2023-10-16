import './style/index.scss';
import { Ripple } from './Ripple';
import { Collapse } from './Collapse';
import { withTransition } from './withTransition';
import { Transition as Animate } from './Transition';

const Zoom = withTransition('zoom');
const Fade = withTransition('fade');

const Transition = Object.assign(Animate, {
  Fade,
  Zoom,
  Ripple,
  Collapse
});

Transition.defaultProps = {
  exit: true,
  enter: true,
  appear: true
};

Fade.displayName = 'WisteriaUI.Fade';
Zoom.displayName = 'WisteriaUI.Zoom';
Collapse.displayName = 'WisteriaUI.Collapse';
Transition.displayName = 'WisteriaUI.Transition';

export { Transition };
export type {
  PhaseStatus,
  CollapseProps,
  TransitionProps,
  TransitionTimeout
} from './interface';
