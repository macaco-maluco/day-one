import Alea from 'alea'

export default function random (seed) { return new Alea(seed)() }

export function randomNd (...args) { return args.reduce((acc, v) => random(acc + v), 0) }
