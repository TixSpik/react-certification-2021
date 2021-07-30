import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';
import List from '../List';
import Navbar from '../Navbar';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Layout>
          <List />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
