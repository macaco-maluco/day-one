import generateStar from '.'

describe('universe star', () => {
  it('should generate a star based on a noise', () => {
    const star = generateStar({})(0.1)
    expect(star).toEqual({
      noise: 0.1,
      name: '神々が愛した靴',
      lifespan: 0.6370065572809835,
      birth: 0.20961191737810722,
      type: 'K',
      radius: 14
    })
  })
})
