import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 100%;
  gap: 1rem;

  margin-top: 5rem;
`;

export const textStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  align-self: flex-start;

  margin-top: 1rem;
`;

export const chipContainerStyle = css`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  gap: 0.5rem;
`;
