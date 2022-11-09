import React from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MenuComponents from "./components/MenuComponents"
import Navbar from "./components/Navbar"
import dishes from "./components/data"
import logo from './logo.svg';

export default function App() {
  const menu=dishes.map(item=>{return(
    <MenuComponents key={item.id}
    image={item.image}
    name={item.name}
    description={item.description}
    />)}

  );
  return (
    <div>
      <Navbar />
      {menu}
    </div>
  );
}
