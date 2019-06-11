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
          8.443300821818411,
          99.92582484846935,
          0.9762564697302878
        ]
      ],
      systems: [
        {
          noise: 0.9762564697302878,
          star: {
            noise: 0.9762564697302878,
            name: 'meamir',
            lifespan: 0.9243151918053627,
            birth: 0.019428938037294088,
            type: 'M',
            radius: 6
          },
          planets: [
            {
              noise: 0.04824743326753378,
              radius: 5,
              material: 'plutonium',
              gravity: 0.7680001026950776,
              populationCapacity: 2524160
            },
            {
              noise: 0.5710047134198248,
              radius: 6,
              material: 'selenium',
              gravity: 5.838745720172301,
              populationCapacity: 29754064
            }
          ],
          orbits: [
            {
              startTranslation: 17,
              radius: 50
            },
            {
              startTranslation: 205,
              radius: 72
            }
          ],
          stages: [
            {
              stage: 'Accretion Disk',
              start: 0
            },
            {
              stage: 'Starting Fusion...',
              start: 0.01665116025951631
            },
            {
              stage: 'Star',
              start: 0.019428938037294088
            },
            {
              stage: 'Brown Dwarf',
              start: 0.9437441298426568
            }
          ]
        }
      ]
    })
  })
})
