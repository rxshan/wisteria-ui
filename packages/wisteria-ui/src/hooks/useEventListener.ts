import { useEffect } from 'preact/hooks';
import { useLatest } from './useLatest';

type EventMap = WindowEventMap | DocumentEventMap | HTMLElementEventMap;

type EventOptions = {
  once?: boolean;
  capture?: boolean;
  passive?: boolean;
};

/**
 * TODO: support target parameter
 */
export const useEventListener = (
  en: keyof EventMap,
  listener: EventListener,
  { once, capture, passive }: EventOptions = {}
) => {
  const eventHandler = useLatest(listener);

  useEffect(() => {
    const handler = eventHandler.current;
    window.addEventListener(en, handler, { once, capture, passive });
    return () => {
      window.removeEventListener(en, handler, { capture });
    };
  }, [en, eventHandler, once, capture, passive]);
};
