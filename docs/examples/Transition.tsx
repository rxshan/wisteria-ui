import type { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Divider, Animate } from 'wisteria-ui';

export const ZoomDemo: FunctionalComponent = () => {
  const [state, setState] = useState({ in: true });
  return (
    <div class="flex flex-col gap-12 items-center">
      <div class="flex">
        <div class="h-28 w-28 flex items-center justify-center">
          <Animate.Zoom {...state} destoryOnClosed={false}>
            <div class="w-20 h-20 bg-violet-300 rounded" />
          </Animate.Zoom>
        </div>
        <Divider direction="vertical" />
        <div class="h-28 w-28 flex items-center justify-center">
          <Animate.Zoom {...state} in={!state.in}>
            <div class="w-20 h-20 rounded bg-emerald-300" />
          </Animate.Zoom>
        </div>
      </div>
      <button
        class="py-2 box-border w-48 bg-red-400 rounded-full text-white font-bold"
        onClick={() => {
          setState(prev => ({ ...prev, in: !state.in }));
        }}
      >
        {state.in ? 'Show Left' : 'Show Right'}
      </button>
    </div>
  );
};

export const FadeDemo: FunctionalComponent = () => {
  const [state, setState] = useState({ in: false });
  return (
    <div class="flex flex-col gap-12 items-center">
      <div class="flex">
        <div class="h-28 w-28 flex items-center justify-center">
          <Animate.Fade {...state} destoryOnClosed={false}>
            <div class="w-20 h-20 bg-violet-300 rounded" />
          </Animate.Fade>
        </div>
        <Divider direction="vertical" />
        <div class="h-28 w-28 flex items-center justify-center">
          <Animate.Fade {...state} in={!state.in}>
            <div class="w-20 h-20 rounded bg-emerald-300" />
          </Animate.Fade>
        </div>
      </div>
      <button
        class="py-2 box-border w-48 bg-red-400 rounded-full text-white font-bold"
        onClick={() => {
          setState(prev => ({ ...prev, in: !state.in }));
        }}
      >
        {state.in ? 'Show Left' : 'Show Right'}
      </button>
    </div>
  );
};
