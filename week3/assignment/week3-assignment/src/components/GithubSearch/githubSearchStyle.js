import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 100%;
  gap: 1rem;
`;

export const inputStyle = (theme) => css`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.purple500};

  font-size: 1.2rem;

  :focus {
    outline: none;
    outline: 1px solid ${theme.colors.purple500};
  }
`;

export const textStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  align-self: flex-start;
`;

export const chipContainerStyle = css`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  gap: 0.5rem;
`;
