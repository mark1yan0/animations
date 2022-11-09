import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/Container'

interface IControls {
  setX: Function
  setY: Function
  setAngle: Function
}

export default function SimpleAnimation() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [angle, setAngle] = useState(0)

  return (
    <Container>
      <Controls setX={setX} setY={setY} setAngle={setAngle} />
      <motion.div
        className='box'
        animate={{
          x: x,
          y: y,
          rotate: angle
        }}
        transition={{ type: 'spring' }}
      />
    </Container>
  )
}

function Controls({ setX, setY, setAngle }: IControls) {
  return (
    <div className='flex'>
      <div>
        <p>X</p>
        <input
          type='range'
          max='300'
          onChange={(e) => setX(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <p>Y</p>
        <input
          type='range'
          max='300'
          onChange={(e) => setY(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <p>Angle</p>
        <input
          type='range'
          max='360'
          onChange={(e) => setAngle(e.target.valueAsNumber)}
        />
      </div>
    </div>
  )
}
