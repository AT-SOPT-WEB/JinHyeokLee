import { css } from '@emotion/react';

export const chipStyle = (theme) => css`
  height: 2.5rem;
  padding: 1rem 0.8rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid ${theme.colors.purple500};

  color: ${theme.colors.purple500};
  font-size: 1.2rem;
  font-weight: 700;

  white-space: nowrap;
`;

export const closeIconStyle = css`
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
`;
