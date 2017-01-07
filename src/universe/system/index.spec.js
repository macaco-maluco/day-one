import generateSystem from '.'

describe('universe system', () => {
  it('should generate a system based on a noise', () => {
    const system = generateSystem({})(0.1)
    expect(system).toEqual({
      noise: 0.1,
      star: {
        noise: 0.1,
        name: 'psoenri',
        lifespan: 0.5341289069037884,
        birth: 0.24737509790977166,
        type: 'G',
        radius: 16
      },
      planets: [
        {
          noise: 0.4288907456211746,
          radius: 6,
          material: 'vanadium',
          gravity: 4.4602402325253925,
          populationCapacity: 22351490
        },
        {
          noise: 0.6234988542273641,
          radius: 6,
          material: 'manganese',
          gravity: 6.347938886005431,
          populationCapacity: 32488431
        },
        {
          noise: 0.990128728793934,
          radius: 7,
          material: 'tellurium',
          gravity: 9.90424866930116,
          populationCapacity: 51585815
        }
      ],
      orbits: [
        {
          startTranslation: 154,
          radius: 52
        },
        {
          startTranslation: 224,
          radius: 75
        },
        {
          startTranslation: 356,
          radius: 99
        }
      ]
    })
  })
})
