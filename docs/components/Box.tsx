import type { JSX, FunctionComponent } from 'preact';

interface BoxProps extends JSX.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  size?: number;
  style?: JSX.CSSProperties;
}

export const Box: FunctionComponent<BoxProps> = ({ size = 64, ...props }) => {
  const externalStyle = props.style ?? {};

  return (
    <div
      {...props}
      class="bg-violet-500 text-white font-bold text-base rounded-md cursor-pointer"
      style={{
        ...externalStyle,
        width: props.width ?? size,
        height: props.height ?? size
      }}
    />
  );
};
