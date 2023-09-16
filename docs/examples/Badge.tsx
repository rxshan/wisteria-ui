import { Badge } from 'wisteria-ui';
import type { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

export const BadgeToggleDemo: FunctionalComponent = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div class="flex items-center gap-16">
      <div class="flex gap-8">
        <Badge variant="dot" invisible={!visible}>
          <div class="w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm" />
        </Badge>
        <Badge count={99} max={99} invisible={!visible}>
          <div class="w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm" />
        </Badge>
      </div>
      <button
        class="bg-slate-300 h-12 w-32 rounded"
        onClick={() => {
          setVisible(s => !s);
        }}
      >
        {visible ? '隐藏' : '显示'}
      </button>
    </div>
  );
};
