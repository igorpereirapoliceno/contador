import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Número de clicks: {count}</p>

            <button onClick={() => setCount(count + 1)}>Adicionar</button>

            <button onClick={() => setCount(count - 1)}>Remover</button>
        </div>
    )
};

export default Contador ;