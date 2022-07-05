import React from 'react';
import { Footer, Header, Main } from './layout';
import GlobalStyle from './theme/globalStyles';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </>
);

export default App;
