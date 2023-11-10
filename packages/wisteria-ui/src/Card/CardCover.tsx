import {
  combineClassnames,
  createCssClass,
  type WisteriaUI
} from '@wisteria-ui/utilities';
import type { CardCoverProps } from './interface';

const [rootClass] = createCssClass('card-cover');

export const CardCover: WisteriaUI.HTMLComponent<
  CardCoverProps,
  HTMLImageElement
> = props => {
  const { source, className, ...attributes } = props;

  return (
    <img
      {...attributes}
      src={source}
      loading="lazy"
      className={combineClassnames(rootClass, className)}
    />
  );
};
