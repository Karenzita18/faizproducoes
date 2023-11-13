import React from 'react';

const QuadradosColoridos = () => {
  const cores = ['#312782', '#e20613', '#e61b72', '#29a600', '#169cd8', 'yellow', 'white'];

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {cores.map((cor, index) => (
        <div
          key={index}
          style={{
            flex: '0 0 auto',
            width: '14%',
            height: '8px',
            backgroundColor: cor,
            //margin: '5px',
          }}
        ></div>
      ))}
    </div>
  );
};

export default QuadradosColoridos;
