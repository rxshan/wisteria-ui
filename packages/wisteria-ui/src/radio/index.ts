import './style/index.scss';
import { Radio as _Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

const Radio = Object.assign(_Radio, { Group: RadioGroup });

Radio.displayName = 'WisRadio';
RadioGroup.displayName = 'WisRadioGroup';

export { Radio };
export type { RadioValue, RadioProps, RadioGroupProps } from './types';
