import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './detail.css';

const Detail = () => {
  const { id } = useParams();
  const allDogs = useSelector((state) => state.allDogs);
  const dogDetail = allDogs.find((dog) => dog.id === parseInt(id));

  const renderTableData = () => {
    const data = [
      { property: 'ID: ', value: dogDetail?.id },
      { property: 'Height: ', value: dogDetail?.height?.metric },
      { property: 'Weight:', value: dogDetail?.weight?.metric },
      { property: 'Temperaments:', value: dogDetail?.temperament },
      { property: 'Life Span:', value: dogDetail?.life_span },
    ];

    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.property}</td>
        <td>{item.value}</td>
      </tr>
    ));
  };

  return (
    <div className='detail.container'>
      {dogDetail ? (
        <div className='detail-e'>
          <h2>{dogDetail?.name}</h2>
          <img src={dogDetail?.image} alt={dogDetail?.name} />

          <table>
            <tbody>{renderTableData()}</tbody>
          </table>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;
