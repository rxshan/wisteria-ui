import {
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass] = createCssClass('card-content');

export const CardContent: WisteriaUI.HTMLComponent = props => {
  const { className, children, ...attributes } = props;
  return (
    <p {...attributes} className={combineClassnames(className, rootClass)}>
      {children}
    </p>
  );
};
