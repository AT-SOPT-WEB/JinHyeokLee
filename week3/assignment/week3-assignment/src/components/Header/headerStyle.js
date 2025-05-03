import { css } from '@emotion/react';

export const headerStyle = (theme) => css`
  width: 100%;
  height: 8rem;
  background-color: ${theme.colors.blue100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const titleStyle = (theme) => css`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${theme.colors.white100};
`;

export const buttonContainerStyle = () => css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.2rem;
`;

export const buttonStyle = (theme) => css`
  width: 10rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.5rem;
  color: ${theme.colors.white100};

  background-color: ${theme.colors.blue100};

  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  cursor: pointer;
`;

export const activeButton = (theme) => css`
  background-color: ${theme.colors.purple300};
  color: ${theme.colors.white100};
`;
