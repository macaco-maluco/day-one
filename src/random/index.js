import Alea from 'alea'

export default (seed) => {
  const r = new Alea(seed)
  return r()
}
