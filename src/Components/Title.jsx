import React from 'react';

const Title = () => {
    console.log('Rendering Title');

return (
    <>
        <h1>React.memo Part</h1>
    </>
)
}


export default React.memo(Title) ;