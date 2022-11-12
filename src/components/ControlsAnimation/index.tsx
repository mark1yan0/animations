import { useState } from 'react';
import { motion } from 'framer-motion';
import Controls from './Controls';
import Container from '../Container';

export default function SimpleAnimation() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [angle, setAngle] = useState(0);

  return (
    <Container>
      <Controls setX={setX} setY={setY} setAngle={setAngle} />
      <motion.div
        className='box'
        animate={{
          x: x,
          y: y,
          rotate: angle,
        }}
        transition={{ type: 'spring' }}
      />
    </Container>
  );
}
