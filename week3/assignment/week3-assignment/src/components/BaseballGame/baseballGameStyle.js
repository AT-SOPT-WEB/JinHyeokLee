import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 100%;
  gap: 1rem;

  margin-top: 2rem;
`;

export const textStyle = (theme) => css`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.blue100};
  margin-top: 2rem;
`;

export const roundResultContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  height: 27rem;

  margin-top: 1.5rem;
  overflow-y: scroll;
`;
