import { AND, XNOR, XOR, OR, NAND, NOR } from './gates'
import { v4 as uuidv4 } from 'uuid'

const VALUES = [
  { val1: 0, val2: 0 },
  { val1: 0, val2: 1 },
  { val1: 1, val2: 0 },
  { val1: 1, val2: 1 }
]

const logicFunctions = [
  { name: 'AND', func: AND },
  { name: 'NAND', func: NAND },
  { name: 'OR', func: OR },
  { name: 'NOR', func: NOR },
  { name: 'XOR', func: XOR },
  { name: 'XNOR', func: XNOR }
]

export default function LogicGates() {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {logicFunctions.map(({ name, func }) => (
        <div key={uuidv4()} className='bg-white rounded-2xl p-4 text-black'>
          <h1>{name}</h1>
          {VALUES.map(({ val1, val2 }) => (
            <div className='flex justify-center' key={uuidv4()}>
              <span className='border border-sky-600 rounded-2xl m-1 p-2'>
                {val1}
              </span>{' '}
              <span className='border border-sky-600 rounded-2xl m-1 p-2'>
                {val2}
              </span>
              <span className='border border-sky-600 rounded-2xl m-1 p-2 grid items-center'>
                --&gt;
              </span>
              &nbsp;{' '}
              <span className='gradient-gray text-white p-4 rounded-2xl m-1'>
                {func(val1, val2)}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
