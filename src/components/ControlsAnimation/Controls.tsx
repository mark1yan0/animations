interface IControls {
  setX: Function;
  setY: Function;
  setAngle: Function;
}

const Controls: React.FC<IControls> = ({ setX, setY, setAngle }) => {
  return (
    <div className='flex'>
      <div>
        <p>X</p>
        <input
          type='range'
          max='300'
          onChange={e => setX(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <p>Y</p>
        <input
          type='range'
          max='300'
          onChange={e => setY(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <p>Angle</p>
        <input
          type='range'
          max='360'
          onChange={e => setAngle(e.target.valueAsNumber)}
        />
      </div>
    </div>
  );
};

export default Controls;
