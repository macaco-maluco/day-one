import { reduce } from 'ramda'
const { floor, sin } = Math

export default (seed, counter) => {
  const x =
    sin(
      reduce((value, char) => value + char.charCodeAt(0), 0, seed.toString().split('')) + counter
    ) * 10000
  return x - floor(x)
}

// We can try
// var m_w = 123456789;
// var m_z = 987654321;
// var mask = 0xffffffff;
//
// // Takes any integer
// function seed(i) {
//     m_w = i;
// }
//
// // Returns number between 0 (inclusive) and 1.0 (exclusive),
// // just like Math.random().
// function random()
// {
//     m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
//     m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
//     var result = ((m_z << 16) + m_w) & mask;
//     result /= 4294967296;
//     return result + 0.5;
// }
