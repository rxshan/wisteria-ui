import type { JSX } from 'preact/jsx-runtime';

export type RadioValue = string | number;

export interface RadioProps {
  color?: string;
}

export interface RadioContextState {
  name?: string;
  value?: RadioValue;
  disabled?: boolean;
  defaultValue?: RadioValue;
  onChange?: (selectedValue: RadioValue) => void;
}

export interface RadioGroupProps extends RadioContextState {
  className?: string;
  style?: JSX.CSSProperties;
}
