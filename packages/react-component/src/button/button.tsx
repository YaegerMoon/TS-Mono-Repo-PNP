import React, { FC } from 'react';
import { ThemeTemplate, defaultTheme } from '@mono/theme';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button style={{ color: defaultTheme.mainColor }}>{children}</button>;
};
