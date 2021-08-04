import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import YouTubePage from '../../pages/YouTubePage';
import AuthProvider from '../../providers/Auth';
import useFetch from '../../utils/hooks/useFetch';
import Layout from '../Layout';
import List from '../List';
import Navbar from '../Navbar';

function App() {

  //the next functions/hooks will be avalible only for this challenge

  const [searchInput, setSearchInput] = useState('')
  const { loading, result, error, fetchData } = useFetch('Wizeline')

  useEffect(() => {
    console.log(result)

  }, [result, loading, error])

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar fetchData={fetchData} setSearchInput={setSearchInput} searchInput={searchInput} />
        <Layout>
          <Switch>
            <Route exact path="/">
              <List data={searchInput} loading={loading} result={result} error={error} />
            </Route>
            <Route exact path="/video/:id" >
              <YouTubePage />
            </Route>
            <Route path="">
              Esta pagína no existe
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
