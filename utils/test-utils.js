import { render } from '@testing-library/react';

const ThemeProvider = ({ children }) => {
  return <div className="theme-provider">{children}</div>;
};

const I18nProvider = ({ children }) => {
  return <div className="i18n-provider">{children}</div>;
};

const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
};

export const customRender = (ui, options) => {
  render(ui, {
    wrapper: AllProviders,
    ...options,
  });
};
