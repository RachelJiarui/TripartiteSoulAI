import React from 'react';
import { resetTripartite } from './../services/resetTripartite.js';

function ResetTripartite({ setTripartite }) {

  async function handleReset() {
    await resetTripartite();
    setTripartite({reason: 0, spirit: 0, eros: 0});
  }

  return (
    <div>
      <button onClick={handleReset}>Reset Tripartite Soul</button>
    </div>
  )
}

export default ResetTripartite;