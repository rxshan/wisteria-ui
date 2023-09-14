import { useEffect, useRef, useState } from 'preact/hooks';
import {
  Radio,
  useWisteriaConfig,
  type Theme,
  type CSSColorVars
} from 'wisteria-ui';
import { Fieldset } from '../components';
import type { FunctionalComponent } from 'preact';

const textMap = {
  light: '亮色',
  dark: '暗色',
  auto: '系统主题'
};

export const SwitchThemeDemo = () => {
  const { theme, dispathConfig } = useWisteriaConfig();
  return (
    <Radio.Group
      value={theme}
      onChange={value => {
        dispathConfig(prev => ({ ...prev, theme: value as Theme }));
      }}
    >
      {Object.entries(textMap).map(([key, text]) => {
        return (
          <Radio key={key} value={key}>
            {text}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

const ColorPicker: FunctionalComponent<{
  color: string;
  cssVar: keyof CSSColorVars;
  onChange: (color: string) => void;
}> = ({ color, cssVar, onChange }) => {
  const { dispathConfig } = useWisteriaConfig();

  return (
    <input
      class="w-24 h-12"
      type="color"
      value={color}
      onChange={event => {
        const pickColor = (event.target as any).value;
        onChange(pickColor);
        dispathConfig(prevConfig => ({
          ...prevConfig,
          cssVars: { ...(prevConfig.cssVars ?? {}), [cssVar]: pickColor }
        }));
      }}
    />
  );
};

export const BROWSER_CACHE_KEY = 'wisteria-theme';

export const ColorPickerDemo = () => {
  const { cssVars } = useWisteriaConfig();

  const [textColor, setTextColor] = useState(
    cssVars?.onSurfaceVariant ?? '#49454e'
  );
  const [primaryColor, setPrimaryColor] = useState(
    cssVars?.primary ?? '#6750a4'
  );

  const cssVarsRef = useRef(cssVars);
  cssVarsRef.current = cssVars;

  useEffect(() => {
    return () => {
      window.localStorage.setItem(
        BROWSER_CACHE_KEY,
        JSON.stringify(cssVarsRef.current)
      );
    };
  }, []);

  return (
    <div class="flex flex-col justify-center gap-8">
      <Fieldset label="Radio Primary Color" line="dashed">
        <label class="inline-flex flex-row items-center gap-16">
          <p>
            <strong>Radio 颜色</strong>:&nbsp;
            <span style={{ color: primaryColor }}>{primaryColor}</span>
          </p>
          <ColorPicker
            color={primaryColor}
            cssVar="primary"
            onChange={setPrimaryColor}
          />
        </label>
      </Fieldset>
      <Fieldset label="Radio Text Color" line="dashed">
        <label class="inline-flex flex-row items-center gap-16">
          <span>
            <strong>Radio 字体颜色</strong>:&nbsp;
            <span style={{ color: textColor }}>{textColor}</span>
          </span>
          <ColorPicker
            color={textColor}
            cssVar="onSurfaceVariant"
            onChange={setTextColor}
          />
        </label>
      </Fieldset>
    </div>
  );
};
