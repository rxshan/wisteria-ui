import { type FunctionalComponent } from 'preact';
import { useLatest } from '../../hooks';
import type { RadioGroupProps } from './types';
import { RadioContextProvider } from './RadioContext';
import { noop, combineClassnames, createCssClass } from '../../utils';

const [selfClass] = createCssClass('radio-group');

export const RadioGroup: FunctionalComponent<RadioGroupProps> = ({
  style,
  className,
  children,
  onChange,
  ...props
}) => {
  const onChangeRef = useLatest(onChange ?? noop);

  return (
    <RadioContextProvider
      state={{
        ...props,
        onChange: onChangeRef.current
      }}
    >
      <div
        role="radiogroup"
        style={style}
        className={combineClassnames(className, selfClass)}
      >
        {children}
      </div>
    </RadioContextProvider>
  );
};
