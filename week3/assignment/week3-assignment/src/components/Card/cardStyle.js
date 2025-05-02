import { css } from '@emotion/react';

export const containerStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 30rem;
  padding: 2rem;
  background-color: ${theme.colors.purple500};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  border-radius: 1rem;
`;

export const closeButtonStyle = (theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  width: 2rem;
  height: 2rem;

  background-color: ${theme.colors.purple400};
  border-radius: 50%;
`;

export const closeIconStyle = css`
  width: 1rem;
  height: 1rem;
`;

export const profileImageStyle = css`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-top: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
`;

export const nameStyle = (theme) => css`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.white100};
`;

export const nicknameStyle = (theme) => css`
  font-size: 1rem;
  font-weight: 300;
  color: ${theme.colors.gray300};
`;

export const followContainerStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const followStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;

  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: ${theme.colors.blue500};
  font-weight: 700;
  background-color: ${theme.colors.purple400};
`;
