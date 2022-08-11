import React from 'react'; 
import {useState} from 'react';
import './App.css';
import { BiSearch} from "react-icons/bi";
import QRCode from "react-qr-code";

function App() {
    const [active, setActive] = useState(false)
    const [name, setName] = useState('')
    const [QR, setQR] = useState('https://github.com/mschmidt17')

    const handleClick = (e) => {
        e.preventDefault()
        if (active === true) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)                   
    }

    const handleGenerate = (e) => {
        e.preventDefault()
        setQR(name)
        setName('')  

    }


  return (
    <div>
        <div className={`search${active ? '.active' : ''}`}>
            <input 
                value = {name}
                type="text" 
                className="input" 
                placeholder="Generate QR..."
                onChange={(e) => handleInputChange(e)}
            />
            <button className="btn" onClick={handleClick}> <BiSearch/> </button>
        </div>

        <div className='enter'>
            <button className="btn-enter" onClick={handleGenerate}> GENERATE QR </button>
        </div>

        <div className='codigo'>
            <QRCode value={QR} size={256} bgColor="#282c34" fgColor="#fff" level="H"/>
        </div>
        
    </div>
  );
}

export default App;