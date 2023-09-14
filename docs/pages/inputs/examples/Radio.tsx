import { Radio } from 'wisteria-ui';
import { useState } from 'preact/hooks';

export const RadioGroupDemo = () => {
  const [state, setState] = useState();

  return (
    <div>
      <Radio.Group
        name="demo"
        value={state}
        defaultValue="A"
        onChange={setState}
      >
        <div class="flex gap-4">
          <Radio value="A">A</Radio>
          <Radio value="B">B</Radio>
          <Radio value="C">C</Radio>
          <Radio value="D">D</Radio>
        </div>
      </Radio.Group>
    </div>
  );
};
