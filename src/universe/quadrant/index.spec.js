import generateQuadrant from '.'

describe('universe | quadrant', () => {
  it('should generate a quadrant with all the systems that it entails', () => {
    const noise = 0.2
    const size = [1, 1]
    const coordinates = [0, 0]

    const quadrant = generateQuadrant({})(noise, size, coordinates)

    expect(quadrant).toEqual({
      noise: 0.2,
      size: [
        1,
        1
      ],
      coordinates: [
        0,
        0
      ],
      cells: [
        [
          0,
          0,
          0.9762564697302878
        ]
      ],
      systems: [
        {
          noise: 0.9762564697302878,
          star: {
            noise: 0.9762564697302878,
            name: 'rhae',
            lifespan: 0.8497191934338844,
            birth: 0.12129388502577362,
            type: 'M',
            radius: 8
          },
          planets: [
            {
              noise: 0.24360326763962803,
              radius: 5,
              material: 'titanium',
              gravity: 2.6629516961043915,
              populationCapacity: 12700050
            },
            {
              noise: 0.2808949677645387,
              radius: 5,
              material: 'phosphorus',
              gravity: 3.024681187316025,
              populationCapacity: 14642537
            },
            {
              noise: 0.6316459105419199,
              radius: 6,
              material: 'manganese',
              gravity: 6.426965332256622,
              populationCapacity: 32912803
            }
          ],
          orbits: [
            {
              starTranslation: 87,
              radius: 51
            },
            {
              starTranslation: 101,
              radius: 72
            },
            {
              starTranslation: 227,
              radius: 95
            }
          ]
        }
      ]
    })
  })
})
