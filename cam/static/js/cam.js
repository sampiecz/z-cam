import React from 'react';
import ReactDOM from 'react-dom';

function Cam() {
  
  function getStream() {
    return fetch('/cam/stream')
      .then(
        data => data
      )
  }

  function up() {
    console.log(getStream());
  }

  function down() {
  
  }

  function left() {
  
  }

  function right() {
  
  }

  return (
  <>
    <div>
      <h1>Z Cam</h1>
      <img style="width: 100%; height:100%;" src={getStream()} />
    </div>
    <ul>
      <li>
        <button onClick={up()}>Up</button>
      </li>	
      <li>
        <button onClick={down()}>Down</button>
      </li>	
      <li>
        <button onClick={left()}>Left</button>
      </li>	
      <li>
        <button onClick={right()}>Right</button>
      </li>	
    </ul>
  </>
  );
}

ReactDOM.render(
  <Cam />,
  document.getElementById('react')
);
