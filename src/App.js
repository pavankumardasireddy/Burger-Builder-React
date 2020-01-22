import React from 'react';
import Layout from './components/Layouts/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
