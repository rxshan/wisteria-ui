import { h, type FunctionComponent } from 'preact';
import styles from './styles.module.css';
import type { JSXInternal } from 'preact/src/jsx';

export interface FieldsetProps {
  label?: string;
  line?: 'dashed' | 'solid' | 'hidden';
  style?: JSXInternal.CSSProperties;
}

export const Fieldset: FunctionComponent<FieldsetProps> = ({
  label,
  line = 'solid',
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
