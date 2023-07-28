import type { FunctionComponent, VNode } from 'preact';
import { Fieldset } from './Fieldset';
import styles from './styles.module.css';

export { Fieldset };

export interface PreviewCodeProps {
  label?: string;
  code?: VNode;
}
// Todo: Fix-移动端代码块宽度超过100%
export const PreviewCode: FunctionComponent<PreviewCodeProps> = ({
  code,
  label,
  children
}) => {
  const line = label ? 'dashed' : 'hidden';
  const gap = !label ? 0 : 16;
  return (
    <div className={styles.previewCode}>
      <Fieldset label={label} line={line} style={{ padding: gap }}>
        <div className={styles.layout}>
          {!!children && <div className={styles.mdx}>{children}</div>}
          {children && code && (
            <span className={styles.arrow}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          )}
          {!!code && (
            <div className={styles.code}>
              <Fieldset
                label="预览代码"
                line="dashed"
                style={{
                  height: '100%',
                  marginTop: -8,
                  fontSize: '0.9rem',
                  borderRadius: '0.75rem'
                }}
              >
                {code}
              </Fieldset>
            </div>
          )}
        </div>
      </Fieldset>
    </div>
  );
};
