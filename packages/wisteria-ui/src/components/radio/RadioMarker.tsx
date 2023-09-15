import { forwardRef } from 'preact/compat';
import type { FunctionalComponent, JSX } from 'preact';
import { createCssClass } from '../../utils';
import { RadioOutlineUnchecked } from '../../icons';
import { SVGIconRoot } from '../../icons/SVGIconRoot';

const [, classnames] = createCssClass('radio');

const RadioIcon: FunctionalComponent<Pick<JSX.HTMLAttributes, 'checked'>> = ({
  checked
}) => {
  return (
    <span className={classnames('icon')}>
      <RadioOutlineUnchecked />
      <SVGIconRoot
        className={classnames('icon-circle')}
        style={{
          transform: `scale(${checked ? 1 : 0})`
        }}
      >
        <circle cx="12" cy="12" r="5" fill="currentColor" />
      </SVGIconRoot>
    </span>
  );
};

export const RadioMarker = forwardRef<
  HTMLInputElement,
  JSX.HTMLAttributes<HTMLInputElement>
>(({ disabled, checked, ...props }, ref) => {
  return (
    <span
      className={classnames('marker')}
      aria-checked={!!checked}
      aria-disabled={!!disabled}
    >
      <input
        {...props}
        ref={ref}
        type="radio"
        checked={checked}
        disabled={disabled}
        className={classnames('input')}
      />
      <RadioIcon checked={checked} />
      {/* Ripple */}
    </span>
  );
});
