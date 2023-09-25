import { Animate, Divider } from 'wisteria-ui';
import { useState } from 'preact/hooks';
import { type FunctionComponent, type FunctionalComponent } from 'preact';

export const AnimateDemo: FunctionComponent<{
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

export const CollapseDemo: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div class="flex flex-col gap-12 items-center">
      <div class="h-20 w-20">
        {/* <Animate.Collapse in={visible}>
          <div class="w-20 h-20 bg-violet-300 rounded" />
        </Animate.Collapse> */}
        <Animate.Collapse in={visible} direction="vertical">
          <div class="w-20 h-20 bg-violet-300 rounded" />
        </Animate.Collapse>
      </div>
      <button
        class={`py-2 box-border w-48  rounded-full text-white font-bold ${
          visible ? 'bg-emerald-300' : 'bg-violet-300'
        }`}
        onClick={() => {
          setVisible(v => !v);
        }}
      >
        {!visible ? 'Show' : 'Close'}
      </button>
    </div>
  );
};
