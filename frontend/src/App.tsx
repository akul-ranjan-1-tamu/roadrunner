import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DataProvider from './data-provider/DataProvider';
import WidgetProvider from './widgets/hooks/WidgetContext';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DataProvider>
        <WidgetProvider>
          <Dashboard />
        </WidgetProvider>
      </DataProvider>
    </DndProvider>
  );
}

export default App;
