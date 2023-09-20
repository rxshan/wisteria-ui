import { useEffect, useRef, useState } from 'preact/hooks';
import type { JSX } from 'preact/jsx-runtime';

export const useCheckImage = ({
  src,
  srcSet,
  crossOrigin,
  referrerpolicy
}: JSX.HTMLAttributes<HTMLImageElement>) => {
  const hasImageSrc = !!src || !!srcSet;

  const active = useRef(false);
  const [loadStatus, setLoadStatus] = useState<'error' | 'loaded'>();

  useEffect(() => {
    if (!hasImageSrc) return;
    active.current = true;
    const image = new Image();

    Object.assign(image, {
      src,
      srcSet,
      crossOrigin,
      referrerpolicy
    });
    image.onload = () => active.current && setLoadStatus('loaded');
    image.onerror = () => active.current && setLoadStatus('error');

    return () => {
      active.current = false;
      setLoadStatus(undefined);
    };
  }, [src, srcSet, crossOrigin, referrerpolicy, hasImageSrc]);

  return [hasImageSrc, loadStatus] as const;
};
