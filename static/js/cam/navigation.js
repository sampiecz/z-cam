import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function Navigation() {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <a className="nav-brand" href="{% url 'index' %}"><span>Z</span></a>
          </td>
          <td>
            <a className="nav-link" href="http://red.local:8000/cam/">Red</a>
          </td>
          <td>
            <a className="nav-link" href="http://purp.local:8000/cam/">Purp</a>
          </td>
          <td>
            <a className="nav-link" href="http://toxic.local:8000/cam/">Toxic</a>
          </td>
          <td>
            <a className="nav-link" href="http://rainbow.local:8000/cam/">Rainbow</a>
          </td>
        </tr>
      </thead>
    </table>
  );
} 
