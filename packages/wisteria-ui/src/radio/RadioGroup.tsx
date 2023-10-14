import type { RadioGroupProps } from './interface';
import { type FunctionalComponent } from 'preact';
import { RadioContextProvider } from './RadioContext';
import {
  noop,
  useLatest,
  createCssClass,
  combineClassnames
} from '@wisteria-ui/utilities';

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
