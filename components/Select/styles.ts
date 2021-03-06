import styled from '@emotion/styled';
import { CommonColorVariants } from '@/theme/types';

export const StyledSelect = styled('div')<{
  $error: boolean;
  $color: CommonColorVariants;
  $withLabel: boolean;
}>(({ theme, $error, $color, $withLabel }) => {
  const mainColor = $error ? theme.palette.error.main : 'rgba(0, 0, 0, 0.23)';

  const focusColor = $error
    ? theme.palette.error.main
    : theme.palette[$color].main;

  const withLabelStyles: any = $withLabel
    ? {
        appearance: 'none',
        padding: theme.spacing(4, 2.8, 0.8),
        background: 'transparent',
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg fill='rgba(0, 0, 0, 0.6)' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")",
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'calc(100% - 0.3rem)',
        backgroundPositionY: '12px',
        height: '46px',
      }
    : {};

  return {
    display: 'inline-block',
    position: 'relative',

    label: {
      position: 'absolute',
      fontSize: '1rem',
      left: '0',
      top: '1%',
      transform: 'translateY(-50%) scale(.7)',
      color: mainColor,
      padding: theme.spacing(0, 1.2),
      margin: theme.spacing(0, 2),
      transition: '.1s ease-out',
      transformOrigin: 'left',
      pointerEvents: 'none',
    },

    select: {
      height: '35px',
      ...withLabelStyles,
      fontSize: '1rem',
      outline: 'none',
      border: `1px solid ${mainColor}`,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
      color: 'rgba(0, 0, 0, 0.7)',
      transition:
        'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,' +
        'transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,' +
        'max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',

      '&:hover:enabled:not(:focus)': !$error && {
        borderColor: 'rgba(0, 0, 0, 0.87)',
      },

      '&:focus': {
        borderColor: focusColor,
      },

      '&::placeholder': {
        color: 'transparent',
      },
    },

    'select:not(:placeholder-shown) + label': {
      top: '20%',
    },

    'select:focus + label': {
      color: focusColor,
    },
  };
});

export const SelectWrapper = styled('div')({
  position: 'relative',
});

export const SelectHelperText = styled('span')<{ $error: boolean }>(
  ({ theme, $error }) => ({
    display: 'block',
    color: $error ? theme.palette.error.main : 'rgba(0, 0, 0, 0.6)',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
    textAlign: 'left',
    padding: theme.spacing(0.75, 3.5, 0),
    minHeight: '1.435rem',
  }),
);
