import { useMemo } from 'preact/hooks';
import { mergeRefs } from '../utils';

export const useMergeRefs: typeof mergeRefs = refs => {
  return useMemo(() => mergeRefs(refs), [refs]);
};

export default useMergeRefs;
