import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './controllers/Form';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h1>REJESTRACJA</h1>
        <Form />
    </React.StrictMode>
);