import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function Controls() {

	function move(direction) {
    console.log(direction)
		fetch(`/servo/${direction}`)
			.then(response => response.json())
			.then(data => console.log(data))
	}

  return (
    <>
      <br/>
      <table>
        <thead>
          <tr>
            <td>
              <button onClick={() => move('up')}>Up</button>
            </td>
            <td>
              <button onClick={() => move('down')}>Down</button>
            </td>
            <td>
              <button onClick={() => move('right')}>Right</button>
            </td>
            <td>
              <button onClick={() => move('left')}>Left</button>
            </td>
          </tr>
        </thead>
      </table>
    </>
  );
}
