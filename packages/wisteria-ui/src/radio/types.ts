import type { JSX } from 'preact/jsx-runtime';

export interface RadioProps
  extends Omit<
    JSX.HTMLAttributes<HTMLInputElement>,
    keyof JSX.AriaAttributes | 'ref'
  > {
  color?: string;
}

export type RadioValue = string | number;

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
