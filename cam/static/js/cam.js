import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Cam() {

  const [imageSrc, setSrc] = useState();

	useEffect( () => {
		fetch('http://purp.local:8000/cam/stream')
			.then(response => {
				response.blob().then(
					(result) => { 
						console.log(result);
					},
					(error) => { 
						console.log(error);
					}
				)
				//const reader = .body.getReader();
				//return new ReadableStream({
				//	start(controller) {
				//		return pump();
				//		function pump() {
				//			return reader.read().then(({ done, value }) => {
				//				// When no more data needs to be consumed, close the stream
				//				if (done) {
				//					controller.close();
				//					return;
				//				}
				//				// Enqueue the next data chunk into our target stream
				//				controller.enqueue(value);
				//				return pump();
				//			});
				//		}
				//	}
				//})
			})
	}, [imageSrc]);

  function up() {
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
      {/*
				<img style="width: 100%; height:100%;" src={imageSrc} />
			*/}
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
