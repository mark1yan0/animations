import { motion } from 'framer-motion'
import React from 'react'
import { MouseEventHandler } from 'react'

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button: React.FC<IProps> = ({ onClick, children }) => {
  return (
    <motion.button
      className='btn-primary'
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.button>
  )
}

export default Button
