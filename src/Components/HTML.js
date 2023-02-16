import { Html } from "@react-three/drei";
import React from "react";

const styles = {
    div: {
        position: 'absolute',
        textAlign: 'center',
        color: 'white',
        fontSize: '1.5rem',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textShadow: '0 0 10px black',
        background: 'rgba(0, 0, 0, 0.5)',
        width: '30rem',
        left: '14.5rem',   // distance from left edge of canvas
        top: '8rem', // distance from bottom edge of canvas
        borderRadius: '1rem',
    },
    h1: {
        fontSize: '3rem',
        margin: '0',
    },
    p: {
        margin: '0',
    },
};

const HTML = () => {
    return (
        <Html>
            <div style={styles.div}>
                <h1>Porsche Car Show</h1>
                <p>Made with React Three Fiber,</p>
                <p>by Jonathan Lindqvist</p>
            </div>
        </Html>
    );
}

export default HTML;
