import React from 'react';
import { Route } from 'react-router';

import Homepage from 'pages/Homepage';
import { RoutesEnum } from 'model/enums/RoutesEnum';

function App() {
  return (
    <>
      <Route
        path={ RoutesEnum.HOMEPAGE }
        component={ Homepage }
        exact
      />
    </>
  );
}

export default App;
