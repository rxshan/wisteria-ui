import { useRef, forwardRef, type PropsWithChildren } from 'preact/compat';
import { combineStyles, combineClassnames, createCssClass } from '../utils';
import type { RadioProps } from './types';
import { RadioMark } from './RadioMark';
import { useRadioGroupContext } from './RadioContext';
import { isNullish, useForkRef, useMergeValue } from '@wisteria-ui/shared';

const [selfClass, classnames] = createCssClass('radio');

export const Radio = forwardRef<
  HTMLInputElement,
  PropsWithChildren<RadioProps>
>(({ style, color, children, className, ...props }, ref) => {
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
      className={combineClassnames(selfClass, className)}
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
