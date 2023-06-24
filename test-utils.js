import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { NextIntlProvider } from 'next-intl';
import localeMsg from './public/locales/ru.json';

function render(
  ui,
  { messages = localeMsg, locale = 'ru', ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return (
      <NextIntlProvider locale={locale} messages={messages}>
        {children}
      </NextIntlProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
