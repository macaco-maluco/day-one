import 'babel-polyfill'
import generateStar from '.'

describe('universe star', () => {
  it('should generate a star based on a noise', () => {
    const star = generateStar({})(0.1)
    expect(star).toEqual({
      noise: 0.1,
      name: 'psoenri',
      lifespan: 0.5341289069037884,
      birth: 0.24737509790977166,
      type: 'G',
      radius: 16,
      stages: [
        {
          stage: 'Accretion Disk',
          start: 0
        },
        {
          stage: 'Starting Fusion...',
          start: 0.2445973201319939
        },
        {
          stage: 'Star',
          start: 0.24737509790977166
        },
        {
          stage: 'Brown Dwarf',
          start: 0.7815040048135601
        }
      ]
    })
  })
})
