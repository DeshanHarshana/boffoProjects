import React, { useEffect } from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import { Provider } from 'react-redux';
import { store, useAppDispatch } from './store/store';
import { fetchPerson } from './store/features/personSlice';

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchPerson())
  },[])
  
  return (
   
    <div className="App">
    <Add />
    <List />
    </div>
   
  );
}

export default App;
