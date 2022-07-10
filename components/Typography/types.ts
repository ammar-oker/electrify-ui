import { DetailedHTMLProps, ElementType, HTMLAttributes } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2';

export type TypographySupportedTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p';

export interface TypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  variant?: TypographyVariant;
  component?: ElementType<any>;
  paragraph?: boolean;
}
