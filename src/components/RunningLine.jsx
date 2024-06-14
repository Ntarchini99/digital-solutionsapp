import React from 'react';
import done from '@/assets/done.png';

const dataSet = [
  'Web full responsive',
  'Excelente manejo de redes sociales',
  'Lo mejor en diseños',
  'Soportes 24/7',
  'Web full responsive',
  'Excelente manejo de redes sociales',
  'Lo mejor en diseños',
  'Soportes 24/7',
  'Web full responsive',
  'Excelente manejo de redes sociales',
  'Lo mejor en diseños',
  'Soportes 24/7',
];

const RunningLine = () => {
  return (
    <div className="relative w-full py-6 border-t-[1px] border-b-[1px] border-blue-300 overflow-hidden running-line">
      <div className="absolute inset-0 animate-slide">
        <div className="flex justify-between items-center h-full">
          {dataSet.map((data, dataIndex) => (
            <div key={dataIndex} className="flex whitespace-nowrap px-4">
              <img src={done} alt="done-icon" className="px-2 py-2" />
              <p className="text-white font-medium pt-1 uppercase">{data}</p>
              <div className="text-white px-4 pt-1">&bull;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningLine;
