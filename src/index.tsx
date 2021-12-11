import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Details from './components/Details';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solicitudes" element={<Details />}>
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
