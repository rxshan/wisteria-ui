import useLatest from './useLatest';
import { useEffect } from 'preact/hooks';
import type { BasicTarget } from '../typedef';
import { getTargetElement } from '../getTargetElement';

export default function useClickAway(
  target: BasicTarget<HTMLElement>,
  onClickAway: (event: Event) => void,
  events: Array<keyof HTMLElementEventMap>
) {
  const onClickAwayRef = useLatest(onClickAway);

  useEffect(() => {
    const element = getTargetElement(target);

    if (!element || !events.length) return;
    const handler = (event: Event) => {
      if (!element.contains(event.target as Node)) {
        onClickAwayRef.current(event);
      }
    };
    for (const ev of events) {
      document.addEventListener(ev, handler);
    }
    return () => {
      for (const ev of events) {
        document.removeEventListener(ev, handler);
      }
    };
  }, [events]);
}
