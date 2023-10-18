import { useCallback, useRef, useState } from 'preact/hooks';
import { isTouchEvent, type WisteriaUI } from '@wisteria-ui/utilities';

export type RippleState = {
  key: WisteriaUI.Key;
  size: number;
  offsetX: number;
  offsetY: number;
};

export const useRippleState = (center?: boolean) => {
  const nextKey = useRef(0);
  const [ripples, setRipples] = useState<Array<RippleState>>([]);

  const triggerRipple = useCallback((event: TouchEvent | MouseEvent) => {
    const evt = isTouchEvent(event) ? event.touches[0] : event;
    const rect = (evt as any).currentTarget.getBoundingClientRect();

    let localX, localY, maxEdgeX, maxEdgeY;

    if (center) {
      maxEdgeX = localX = rect.width / 2;
      maxEdgeY = localY = rect.height / 2;
    } else {
      localX = evt.clientX - rect.left;
      localY = evt.clientY - rect.top;

      maxEdgeX = Math.max(Math.abs(rect.width - localX), localX);
      maxEdgeY = Math.max(Math.abs(rect.height - localY), localY);
    }
    const radius = Math.round(Math.sqrt(maxEdgeX ** 2 + maxEdgeY ** 2));

    const offsetX = localX - radius;
    const offsetY = localY - radius;

    setRipples(prev => [
      ...prev,
      { key: nextKey.current, size: radius * 2, offsetX, offsetY }
    ]);
    nextKey.current += 1;
  }, []);

  const removeRipple = useCallback(() => {
    setRipples(prev => prev.slice(1));
  }, []);

  return { ripples, triggerRipple, removeRipple };
};
