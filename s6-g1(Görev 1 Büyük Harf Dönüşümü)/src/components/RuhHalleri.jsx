
import React from 'react'; /* ADIM 0 */

const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function RuhHalleri() {


  const mutluEt = () => {

  };
  const uZ = () => {

  };
  const reset = () => {

  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'royalblue'
  };

  return (
    <div className="widget-moods container">
      <h2>RuhHalleri</h2>
      <div id="ruhHali" style={stil}>
        Nasıl hissediyorum bilmiyorum :-|
      </div>{' '}
      <div>
        <button id="mutluEt" onClick={mutluEt}>
          Mutlu Et
        </button>
        <button id="uz" onClick={uZ}>
          Üz
        </button>
        <button id="resetRuhHali" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
