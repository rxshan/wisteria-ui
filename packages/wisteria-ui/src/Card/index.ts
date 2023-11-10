import './style/index.scss';
import { Card as UICard } from './Card';
import { CardCover } from './CardCover';
import { CardTitle } from './CardTitle';
import { CardActions } from './CardActions';
import { CardContent } from './CardContent';

UICard.displayName = 'WisteriaUI.Card';
CardCover.displayName = 'WisteriaUI.CardCover';
CardTitle.displayName = 'WisteriaUI.CardTitle';
CardActions.displayName = 'WisteriaUI.CardActions';
CardContent.displayName = 'WisteriaUI.CardContent';

const Card = Object.assign(UICard, {
  Title: CardTitle,
  Cover: CardCover,
  Actions: CardActions,
  Content: CardContent
});

export { Card, CardActions, CardContent, CardCover, CardTitle };
export type { CardProps, CardTitleProps, CardActionsProps } from './interface';
