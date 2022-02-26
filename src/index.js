import React from 'react';
import { 
  render
 } from 'react-dom';
import './index.css';
import App from './App';
import { 
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
  import Category from './components/Category';
  import Question from './components/Question';
import reportWebVitals from './reportWebVitals';

render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Category' element={<Category/>} />
      <Route path='/Question/:id' element={<Question/>} />


      

      {/* <Route path='Category' element={<Category/>}>
        <Route path=':CategoryId' element={<Question/>} />
      </Route> */}
      <Route path='*' element={<main><p>theres nothing to render.no match</p></main>} />
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
