//create a light with snowy feeling
//create a light moonlight feeling

import React from 'react';


const Lights = () => {
    return (
        <>
        <ambientLight intensity={1.3} />
        <pointLight position={[10, 10, 10]} />
        </>
    );
    }

export default Lights;