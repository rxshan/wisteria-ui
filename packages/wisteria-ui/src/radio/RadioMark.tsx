import { Animate } from '../animate';
import { forwardRef } from 'preact/compat';
import { RadioOutlineUnchecked } from '../icons';
import { SVGIconRoot } from '../icons/SVGIconRoot';
import type { FunctionalComponent, JSX } from 'preact';
import { createCssClass } from '@wisteria-ui/utilities';

const [, clsx] = createCssClass('radio');

const RadioIcon: FunctionalComponent<Pick<JSX.HTMLAttributes, 'checked'>> = ({
  checked
}) => {
  return (
    <span className={clsx('icon')}>
      <RadioOutlineUnchecked />
      <Animate.Zoom in={!!checked} destoryOnClosed={false}>
        <SVGIconRoot className={clsx('icon-mark')}>
          <circle cx="12" cy="12" r="5" fill="currentColor" />
        </SVGIconRoot>
      </Animate.Zoom>
    </span>
  );
};

export const RadioMark = forwardRef<
  HTMLInputElement,
  JSX.HTMLAttributes<HTMLInputElement>
>(({ disabled, checked, ...props }, ref) => {
  return (
    <span
      className={clsx('mark')}
      aria-checked={!!checked}
      aria-disabled={!!disabled}
    >
      <input
        {...props}
        ref={ref}
        type="radio"
        checked={checked}
        disabled={disabled}
        className={clsx('input')}
      />
      <RadioIcon checked={checked} />
      {/* <Animate.Ripple /> */}
    </span>
  );
});
