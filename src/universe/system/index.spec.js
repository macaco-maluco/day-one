import generateSystem from '.'

describe('universe star', () => {
  it('should generate a star based on a noise', () => {
    const system = generateSystem({})(0.1)
    expect(system).toEqual({
      noise: 0.1,
      star: {
        noise: 0.1,
        name: '神々が愛した靴',
        lifespan: 0.6370065572809835,
        birth: 0.20961191737810722,
        type: 'K',
        radius: 14
      },
      planets: [
        {
          noise: 0.5463912608211103,
          radius: 6,
          material: 'arsenic',
          gravity: 5.59999522996477,
          populationCapacity: 28471974
        },
        {
          noise: 0.7840610153070884,
          radius: 7,
          material: 'tungsten',
          gravity: 7.905391848478756,
          populationCapacity: 40851954
        },
        {
          noise: 0.451620451333838,
          radius: 6,
          material: 'zircorium',
          gravity: 4.680718377938228,
          populationCapacity: 23535457
        }
      ],
      orbits: [
        {
          starTranslation: 196,
          radius: 52
        },
        {
          starTranslation: 282,
          radius: 75
        },
        {
          starTranslation: 162,
          radius: 97
        }
      ]
    })
  })
})
