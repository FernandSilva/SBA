
import React, { useState } from 'react';
import { PageType } from './types';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('HOME');

  return (
    <Dashboard 
      activePage={activePage} 
      setActivePage={setActivePage} 
    />
  );
};

export default App;
