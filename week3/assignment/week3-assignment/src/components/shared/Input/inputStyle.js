import { css } from '@emotion/react';

const commonContainerStyle = (theme) => css`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 1rem;

  border: 1px solid ${theme.colors.purple500};
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};
`;

export const containerStyle = (theme) => [commonContainerStyle(theme)];

export const containerFocusStyle = (theme) => css`
  outline: 1px solid ${theme.colors.purple500};
`;

export const inputStyle = () => css`
  width: 100%;

  font-size: 1.2rem;
`;
