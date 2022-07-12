import styled from '@emotion/styled';

export const StyledCard = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: '7px',
  padding: '0.5rem',

  [`@media only screen and (min-width: ${theme.breakpoints.sm}px)`]: {
    padding: '1rem',
  },
}));
