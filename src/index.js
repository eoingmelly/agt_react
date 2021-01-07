import React from 'react'
import ReactDom from 'react-dom';



function Greeting() {
  return <h4>this is Eoin and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'))