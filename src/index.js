import React from "react"
import {createRoot}  from "react-dom/client";
//import { ReactDOM } from "react-dom";
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';

const container = document.querySelector('#root');
//const saludo = <h1>Hola mundo</h1>; //<== eso es jsx

const root = createRoot(container);
//root.render(<PrimeraApp nombre="Maria" apellido="Garcia" />);
//ReactDOM.render(saludo, root);


root.render(<CounterApp value={5} />);

