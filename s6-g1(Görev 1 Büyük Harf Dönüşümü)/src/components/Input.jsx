import React, { useState } from 'react';

export default function Input() {
  const [write, setwrite] = useState('');
  /* ADIM 1 */

  const inputuDeğiştir = (evt) => {
    setwrite(evt.target.value);
  };
  const reset = () => {
    setwrite('');
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: write.length > 10 ? 'crimson' : 'royalblue'
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div data-testid="output" style={stil}>
        {write.toUpperCase()}
      </div>

      <div>
        <input
          data-testid="input"
          type="text"
          data-testid="input"
          onChange={inputuDeğiştir}
          value={write}
        />{' '}
        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
