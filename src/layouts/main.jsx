import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import Header from 'components/header';
import Routes from 'helpers/routes';

import GlobalStyle from './globalStyle';
import ThemeStyle from './themeStyle';


function Main() {
  function getRoutes() {
    const routeComponents = Routes.map(({ path, exact, component }, key) => (
      <Route
        path={path}
        exact={exact}
        component={component}
        key={`route-${key}`}
      />
    ));

    return routeComponents;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={ThemeStyle}>
        <>
          <GlobalStyle />
          <Header />
          <div>{getRoutes()}</div>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Main;
