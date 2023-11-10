import {
  combineClassnames,
  createCssClass,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass] = createCssClass('card-cover');

export const CardCover: WisteriaUI.HTMLComponent<
  object,
  HTMLImageElement
> = props => {
  const { className, ...attributes } = props;

  return (
    <img
      {...attributes}
      loading="lazy"
      className={combineClassnames(rootClass, className)}
    />
  );
};
