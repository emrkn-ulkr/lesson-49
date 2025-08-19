

import React, { useState } from 'react';

export default function Sayac() {
  const [sayici, setSayici] = useState(0);

  const artirici = () => {
    setSayici(sayici + 1);
  };
  const azaltici = () => {
    setSayici(sayici - 1);
  };
  const reset = () => {
    setSayici(0);
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: sayici % 2 === 0 ? 'royalBlue' : 'crimson',
  };

  return (
    <div className="widget-counter container">
      <h2>Sayaç</h2>
      <div id="sayici" style={stil}>
        Sayı: {sayici}{' '}
        {sayici % 2 === 0 ? 'çift sayıdır' : 'tek sayıdır'}
      </div>
      <div>
        <button id="artirici" onClick={artirici}>
          Artırıcı
        </button>
        <button id="decrement" onClick={azaltici}>
          Azaltıcı
        </button>
        <button id="resetCount" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
