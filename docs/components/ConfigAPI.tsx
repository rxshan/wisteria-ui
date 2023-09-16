import { useMemo } from 'preact/hooks';
import type { FunctionalComponent, JSX } from 'preact';
import styles from './styles.module.css';

const CONFIG_LIST = [
  'typedef',
  'property',
  'description',
  'defaultValue'
] as const;

type ConfigAPIOption = Partial<Record<(typeof CONFIG_LIST)[number], string>>;

const Text: FunctionalComponent<JSX.HTMLAttributes<HTMLElement>> = ({
  children,
  className = ''
}) => {
  const classes = [
    'py-2',
    'pl-6',
    'text-xs',
    'leading-6',
    'font-mono',
    'font-semibold',
    className
  ];
  return <td class={classes.join(' ')}>{children}</td>;
};

const ConfigAPIRow: FunctionalComponent<ConfigAPIOption> = props => {
  const { typedef, property, description, defaultValue } = useMemo(() => {
    return Object.assign(
      Object.fromEntries(CONFIG_LIST.map(key => [key, '-'])),
      Object.fromEntries(
        Object.entries(props)
          .filter(([key]) => CONFIG_LIST.includes(key as any))
          .map(([key, value]) => {
            return [key, value.trim()];
          })
      )
    );
  }, [props]);

  console.log(defaultValue);

  return (
    <tr className="border-b border-gray-100 dark:border-neutral-700/50">
      <Text className="text-violet-500 pl-0">{property}</Text>
      <Text className="text-slate-500">{description}</Text>
      <Text className="text-violet-500">{typedef}</Text>
      <Text className="text-slate-500">{defaultValue}</Text>
    </tr>
  );
};

export const ConfigAPI: FunctionalComponent<{
  list: ConfigAPIOption[];
}> = ({ list }) => {
  return (
    <div
      className={
        '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left dark:border-neutral-700">
            <th className="py-2 font-semibold">属性</th>
            <th className="px-6 py-2 font-semibold">说明</th>
            <th className="py-2 pl-6 font-semibold">类型</th>
            <th className="py-2 pl-6 font-semibold">默认值</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {list.map((item, key) => (
            <ConfigAPIRow {...item} key={key} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
