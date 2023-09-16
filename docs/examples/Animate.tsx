import { Divider } from 'wisteria-ui';
import { useState } from 'preact/hooks';
import { type FunctionalComponent } from 'preact';

export const AnimateDemo: FunctionalComponent<{
  TransitionComponent: FunctionalComponent<any>;
  defaultVisible?: boolean;
}> = ({ defaultVisible, TransitionComponent }) => {
  const [visible, setVisible] = useState(!!defaultVisible);
  return (
    <div class="flex flex-col gap-12 items-center">
      <div class="flex">
        <div class="h-28 w-28 flex items-center justify-center">
          <TransitionComponent in={visible}>
            <div class="w-20 h-20 bg-violet-300 rounded" />
          </TransitionComponent>
        </div>
        <Divider direction="vertical" />
        <div class="h-28 w-28 flex items-center justify-center">
          <TransitionComponent in={!visible}>
            <div class="w-20 h-20 rounded bg-emerald-300" />
          </TransitionComponent>
        </div>
      </div>
      <button
        class={`py-2 box-border w-48  rounded-full text-white font-bold ${
          visible ? 'bg-emerald-300' : 'bg-violet-300'
        }`}
        onClick={() => {
          setVisible(v => !v);
        }}
      >
        {!visible ? 'Show Left' : 'Show Right'}
      </button>
    </div>
  );
};
