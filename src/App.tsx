import React from 'react';
import AppRoutes from './router/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      {/* Layout 태그 안에 AppRoutes가 있기에
        AppRoutes 내용이 Layout 안에 있는 {children}에 쏙 들어간다
      */}
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
