import { RadioMark } from './RadioMark';
import type { RadioProps } from './interface';
import { useRadioGroupContext } from './RadioContext';
import { useRef, forwardRef } from 'preact/compat';
import {
  isNullish,
  useForkRef,
  useMergeValue,
  combineStyles,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass, classnames] = createCssClass('radio');

export const Radio = forwardRef<
  HTMLInputElement,
  WisteriaUI.PropsWithHTMLAttrs<RadioProps>
>(({ color, style, className, children, ...props }, ref) => {
  const innerRef = useRef<HTMLInputElement>(null);
  const mergeRef = useForkRef(ref, innerRef);

  const { group, state } = useRadioGroupContext();

  if (group) {
    Object.assign(props, {
      name: state.name,
      disabled: !!(props.disabled || state.disabled),
      checked: isNullish(state.value) ? undefined : props.value === state.value,
      defaultChecked: props.value === state.defaultValue
    });
  }

  const [checked, setChecked] = useMergeValue(false, {
    value: props.checked,
    defaultValue: props.defaultChecked
  });

  return (
    <label
      className={combineClassnames(rootClass, className)}
      style={combineStyles(style, {
        cursor: props.disabled ? 'default' : 'pointer',
        '--wisteria-radio-color': color
      })}
    >
      <RadioMark
        {...props}
        ref={mergeRef as any}
        checked={checked}
        onChange={event => {
          if (group) {
            state.onChange?.((event.target as any).value);
          } else if (!Object.hasOwn(props, 'checked')) {
            setChecked(true);
          }
          props.onChange?.(event);
        }}
      />
      {!isNullish(children) && (
        <span className={classnames('text', props.disabled && 'text-disabled')}>
          {children}
        </span>
      )}
    </label>
  );
});
