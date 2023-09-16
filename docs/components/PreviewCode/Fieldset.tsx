import type { JSX, FunctionComponent } from 'preact';
import styles from './styles.module.css';

export interface FieldsetProps {
  label?: string;
  line?: 'dashed' | 'solid' | 'hidden';
  style?: JSX.CSSProperties;
}

export const Fieldset: FunctionComponent<FieldsetProps> = ({
  label,
  line = 'dashed',
  style = {},
  children
}) => {
  return (
    <fieldset
      style={{ '--line-mode': line, ...style }}
      className={styles.fieldset}
    >
      {!!label && <legend>{label}</legend>}
      {children}
    </fieldset>
  );
};
