import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function VideoStream() {
  return (
		<div>
			<h1>ZorroCam</h1>
			<img width="320" height="240" src="http://rainbow.local:8000/cam/stream"/>
		</div>	
  );
} 
