import React from 'react';
import "../../styles/Secret.scss"

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dicta dolor doloremque ea eius eligendi expedita facere fugit ipsa laborum maiores non odit placeat porro quas reprehenderit totam voluptatem? Eaque!'

const SecretPage = () => {
    return (
        <div className="secret">
            <p className="secret__p">
                {lorem.repeat(120)}
            </p>
        </div>
    );
};

export default SecretPage;