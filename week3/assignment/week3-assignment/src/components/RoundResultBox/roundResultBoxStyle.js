import { css } from '@emotion/react';

export const roundResultStyle = (theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${theme.colors.blue100};
`;
