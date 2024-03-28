import React from 'react';
import ProgressBar from './ProgressBar.js'
import './ProgressBar.css';

function TripartiteSoul({tripartite}) {
  
  return (
    <div>
      <div className='progress-header'>Reason</div>
      <ProgressBar percentage={tripartite["reason"]}/>
      <div className='progress-header'>Spirit</div>
      <ProgressBar percentage={tripartite["spirit"]}/>
      <div className='progress-header'>Eros</div>
      <ProgressBar percentage={tripartite["eros"]}/>
    </div>
  )
}

export default TripartiteSoul;