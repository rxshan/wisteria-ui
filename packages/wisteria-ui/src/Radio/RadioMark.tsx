import { Transition } from '../Transition';
import { forwardRef } from 'preact/compat';
import { RadioOutlineUnchecked } from '../icons';
import { SVGIconRoot } from '../icons/SVGIconRoot';
import { createCssClass, type WisteriaUI } from '@wisteria-ui/utilities';

const [, clsx] = createCssClass('radio');

const RadioIcon: WisteriaUI.Component<{ checked?: boolean }> = ({
  checked
}) => {
  return (
    <span className={clsx('icon')}>
      <RadioOutlineUnchecked />
      <Transition.Zoom in={!!checked} destoryOnClosed={false}>
        <SVGIconRoot className={clsx('icon-mark')}>
          <circle cx="12" cy="12" r="5" fill="currentColor" />
        </SVGIconRoot>
      </Transition.Zoom>
    </span>
  );
};

export const RadioMark = forwardRef<
  HTMLInputElement,
  WisteriaUI.PropsWithHTMLAttrs<object, HTMLInputElement>
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
      {/* <Transition.Ripple /> */}
    </span>
  );
});
