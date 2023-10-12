import { Radio, Space } from 'wisteria-ui';
import { Box, CodeDemoArea } from '@/components';
import { useState } from 'preact/hooks';

export const SpaceDemo = () => {
  const [size, setSize] = useState(16);
  const [direction, setDirection] = useState('horizontal');
  const [align, setAlign] = useState('center');
  return (
    <CodeDemoArea>
      <div class="flex flex-col items-center" style={{ width: '100%' }}>
        <Space size={size} align={align as any} direction={direction as any}>
          <Box size={48} />
          <Box size={64} />
          <Box size={80} />
        </Space>
        <div class="flex flex-col" style={{ width: '100%' }}>
          <div class="flex flex-wrap mt-5 gap-4">
            <CodeDemoArea label="Gap Size" style={{ flex: 1 }}>
              <Radio.Group
                name="size"
                value={size}
                onChange={value => {
                  setSize(Number(value));
                }}
              >
                <Radio value={8}>8px</Radio>
                <Radio value={16}>16px</Radio>
                <Radio value={24}>24px</Radio>
              </Radio.Group>
            </CodeDemoArea>
            <CodeDemoArea label="Direction" style={{ flex: 1 }}>
              <Radio.Group
                name="direction"
                value={direction}
                onChange={value => {
                  setDirection(value as string);
                }}
              >
                <Radio value="horizontal">水平方向</Radio>
                <Radio value="vertical">竖直方向</Radio>
              </Radio.Group>
            </CodeDemoArea>
          </div>
          <CodeDemoArea label="Align">
            <Radio.Group
              name="size"
              value={align}
              onChange={value => {
                setAlign(value as string);
              }}
            >
              <Radio value="start">start</Radio>
              <Radio value="center">center</Radio>
              <Radio value="end">end</Radio>
              <Radio value="baseline">baseline</Radio>
            </Radio.Group>
          </CodeDemoArea>
        </div>
      </div>
    </CodeDemoArea>
  );
};
