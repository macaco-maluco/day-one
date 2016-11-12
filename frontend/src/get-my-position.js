const {random, floor, pow} = Math
const SIZE = pow(10, 16)

export default () => [random(), random()]
  .map((x) => SIZE * x)
  .map(floor)
