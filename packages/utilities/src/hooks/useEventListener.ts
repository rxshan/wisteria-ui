import { useEffect, useRef } from 'preact/hooks';
import type { BasicTarget } from '../typings/typedef';
import { getTargetElement } from '../utils/getTargetElement';

type EventTarget = BasicTarget<Element | HTMLElement | Document | Window>;

type EventMap = WindowEventMap &
  ElementEventMap &
  DocumentEventMap &
  HTMLElementEventMap;

type EventListenerOptions<Target extends EventTarget = EventTarget> = {
  target?: Target;
  once?: boolean;
  capture?: boolean;
  passive?: boolean;
};

export default function useEventListener<K extends keyof EventMap>(
  eventName: K,
  handler: (event: Event) => void,
  options?: EventListenerOptions
) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    const target = getTargetElement(options?.target, window);

    if (!target?.addEventListener) return;

    const listener = (event: Event) => {
      handlerRef.current(event);
    };
    target.addEventListener(eventName, listener, {
      once: options?.once,
      capture: options?.capture,
      passive: options?.passive
    });
    return () => {
      target.removeEventListener(eventName, listener, {
        capture: options?.capture
      });
    };
  }, [eventName, options?.once, options?.passive, options?.capture]);
}
