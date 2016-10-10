import React from 'react';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import source from './Examples/collection.js';
import './48-collection-demo.css';

export default () => (
  <Slide>
    <h1>Collection demo</h1>

    <CodeMirror source={source} />
  </Slide>
);
