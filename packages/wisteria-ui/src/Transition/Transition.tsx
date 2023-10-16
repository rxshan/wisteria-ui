import { cloneElement } from 'preact';
import { useSafeSetState } from './hooks/useSafeSetState';
import { useEffect, useMemo, useRef } from 'preact/hooks';
import { PhaseStatus, type TransitionProps } from './interface';
import {
  isObject,
  isCallback,
  useUpdateEffect,
  type WisteriaUI
} from '@wisteria-ui/utilities';

export const Transition: WisteriaUI.Component<TransitionProps> = props => {
  const timerRef = useRef<NodeJS.Timeout>();

  const [status, setStatus] = useSafeSetState<PhaseStatus>(() => {
    return props.in
      ? props.appear
        ? PhaseStatus.EXITED
        : PhaseStatus.ENTERED
      : PhaseStatus.EXITED;
  });

  const timeouts = useMemo(() => {
    if (isObject(props.timeout)) {
      return Object.assign(props.timeout, {
        appear: props.timeout.appear ?? props.timeout.enter
      });
    }
    let appear, exit, enter;
    // eslint-disable-next-line prefer-const
    appear = exit = enter = props.timeout;
    return { appear, exit, enter };
  }, [props.timeout]);

  const performEnter = (mounting?: boolean) => {
    if (!mounting && !props.enter) {
      return setStatus(PhaseStatus.ENTERED, props.onEntered);
    }
    props.onEnter?.();

    const duration = mounting ? timeouts.appear : timeouts.enter;

    setStatus(PhaseStatus.ENTERING, props.onEntering);
    timerRef.current = setTimeout(() => {
      setStatus(PhaseStatus.ENTERED, props.onEntered);
    }, duration);
  };

  const performExit = () => {
    if (!props.exit) {
      return setStatus(PhaseStatus.EXITED, props.onExited);
    }

    props.onExit?.();

    setStatus(PhaseStatus.EXITING, props.onExiting);
    timerRef.current = setTimeout(() => {
      setStatus(PhaseStatus.EXITED, props.onExited);
    }, timeouts.exit);
  };

  useEffect(() => {
    if (props.in && props.appear) {
      performEnter(true);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  useUpdateEffect(() => {
    if (props.in) {
      performEnter();
    } else {
      performExit();
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [props.in]);

  if (props.unmountOnExit && status === PhaseStatus.EXITED) return null;
  return isCallback(props.children)
    ? props.children(status)
    : cloneElement(props.children);
};
