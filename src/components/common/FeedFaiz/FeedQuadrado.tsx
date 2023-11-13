import React from 'react';

const QuadradosColoridos = () => {
  const cores = ['#312782', '#e20613', '#e61b72', '#29a600', '#169cd8', 'yellow', '#D3D3D3'];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      {cores.map((cor, index) => (
        <div
          key={index}
          style={{
            flex: 1,
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
