import React, { useState } from 'react';

function App() {
    
    const [miTexto, setMiTexto] = useState('');

    
    const handleText = (event) => {
        const textoIngresado = event.target.value;
        setMiTexto(textoIngresado);
    };

    return (
        <div>
            <div>Ingrese texto:</div>
            <input type="text" onChange={handleText} value={miTexto} />
            <p>{miTexto}</p>
        </div>
    );
}

export default App;
