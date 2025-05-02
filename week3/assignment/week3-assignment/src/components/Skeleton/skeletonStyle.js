import { css } from '@emotion/react';

export const skeletonStyle = (width, height) => css`
  display: inline-block;
  width: ${width};
  height: ${height};
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #c0c0c0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;
