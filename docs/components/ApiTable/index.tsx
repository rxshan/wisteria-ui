import { h, type FunctionComponent } from 'preact';
import styles from './styles.module.css';

type Type = string;
type Property = string;
type Description = string;
type DefaultValue = string;

type ApiOption =
  | [Property, Description, Type]
  | [Property, Description, Type, DefaultValue];

export type ApiTableProps = {
  options: ApiOption[];
};

export const ApiTable: FunctionComponent<ApiTableProps> = ({ options }) => {
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
          {options.map(([property, description, type, defaultValue], key) => (
            <tr
              key={key}
              className="border-b border-gray-100 dark:border-neutral-700/50"
            >
              <td className="py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500">
                {property}
              </td>
              <td className="py-2 pl-6 whitespace-pre font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {description}
              </td>
              <td className="py-2 pl-6 whitespace-pre font-mono text-xs font-semibold text-violet-600 dark:text-violet-500">
                {type}
              </td>
              <td className="py-2 pl-6 whitespace-pre font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {defaultValue ?? '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
