import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Container from '../Container';
import Button from '../Button';

export default function List() {
  const [blocks, setBlocks] = useState([1]);

  const handleClick = () => {
    setBlocks(prev => [...prev, prev[blocks.length - 1] + 1]);
  };

  const removeHandler = (index: number) => {
    if (index === 1) {
      return;
    }
    const filtered = blocks.filter(block => block !== index);
    setBlocks(filtered);
  };

  return (
    <Container>
      <Button onClick={handleClick}>Add Item</Button>
      <AnimatePresence>
        {blocks.map(block => (
          <motion.div
            onClick={removeHandler.bind(null, block)}
            whileTap={{
              scale: 0.9,
            }}
            className='box'
            key={block}
            layout
            initial={{ opacity: 0, y: -75 }}
            exit={{ x: '-100px', opacity: 0 }}
            transition={{
              y: {
                type: 'spring',
              },
              opacity: {
                duration: 0.3,
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            animate={{ opacity: 1, y: block * 5 }}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
}
