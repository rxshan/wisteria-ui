import { isNullish } from '../is';
import { useState, useEffect, type StateUpdater } from 'preact/hooks';

type DefaultProps<T> = {
  value?: T;
  defaultValue?: T;
};

export default function useMergeValue<Value>(
  initialValue: Value,
  { value, defaultValue }: DefaultProps<Value> = {}
): [Value, StateUpdater<Value>] {
  const [skipped, setSkipped] = useState(false);
  const [state, setState] = useState(value ?? defaultValue ?? initialValue);

  useEffect(() => {
    if (!isNullish(value)) {
      setSkipped(true);
    }
  }, [value]);

  const latestValue = (skipped ? value : state) as Value;

  return [latestValue, setState];
}
