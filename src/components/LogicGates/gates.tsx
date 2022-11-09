function fromBoolToNum(val: boolean | number) {
  return val ? 1 : 0
}

export function AND(val1: number, val2: number) {
  return fromBoolToNum(val1 && val2)
}

export function NAND(val1: number, val2: number) {
  // return fromBoolToNum(!AND(val1, val2));
  return fromBoolToNum(!(val1 && val2))
}

export function OR(val1: number, val2: number) {
  return fromBoolToNum(val1 || val2)
}

export function NOR(val1: number, val2: number) {
  // return fromBoolToNum(!OR(val1, val2));
  return fromBoolToNum(!(val1 || val2))
}

export function XOR(val1: number, val2: number) {
  return fromBoolToNum(val1 !== val2)
}

export function XNOR(val1: number, val2: number) {
  return fromBoolToNum(val1 === val2)
}
