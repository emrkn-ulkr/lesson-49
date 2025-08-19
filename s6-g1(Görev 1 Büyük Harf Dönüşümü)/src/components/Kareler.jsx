import React, { useState } from 'react';


const KareIdListesi = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Kareler() {

  const [kareListesi] = useState(KareIdListesi);
  const [aktifId, setaktifId] = useState('');

  const classAdiAl = (id) => {

    return id === aktifId ? 'active' : '';
  };

  const aktifEt = (id) => {

    id === aktifId ? setaktifId('') : setaktifId(id);
  };

  return (
    <div className="widget-squares container">
      <h2>Kareler</h2>
      <div className="squares">
        {
          KareIdListesi.map((id) => (
            <div
              id={id}
              key={id}
              data-testid={id}
              className={`square ${classAdiAl(id)}`}
              onClick={() => aktifEt(id)}
            ></div>
          ))
        }
      </div>
    </div>
  );
}
