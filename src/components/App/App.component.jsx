import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import useFetch from '../../utils/hooks/useFetch';
import Layout from '../Layout';
import List from '../List';
import Navbar from '../Navbar';

function App() {

  //the next functions/hooks will be avalible only for this challenge

  const [searchInput, setSearchInput] = useState('Wizeline')
  const { loading, result, error } = useFetch(searchInput)

  useEffect(() => {
    console.log(result)
  }, [ result, loading, error])

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar setSearchInput={setSearchInput} />
        <Layout>
          <List loading={loading} result={result} error={error} />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
