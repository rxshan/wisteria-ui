import type { JSX, FunctionComponent } from 'preact';

export interface CodeDemoAreaProps
  extends JSX.HTMLAttributes<HTMLFieldSetElement> {
  line?: 'dashed' | 'solid' | 'hidden';
}

export const CodeDemoArea: FunctionComponent<CodeDemoAreaProps> = ({
  label,
  children,
  line = 'dashed',
  ...props
}) => {
  return (
    <fieldset
      {...props}
      class="rounded-lg p-4 border my-4"
      style={{
        borderStyle: line,
        ...((props.style ?? {}) as JSX.CSSProperties)
      }}
    >
      <legend hidden={!label} class="px-2 font-bold italic">
        {label}
      </legend>
      <div class="flex justify-center gap-6" style={{ width: '100%' }}>
        {children}
      </div>
    </fieldset>
  );
};
