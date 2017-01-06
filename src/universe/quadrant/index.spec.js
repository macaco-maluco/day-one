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
          -300,
          -300,
          0.1729920324869454
        ],
        [
          -300,
          0,
          0.9443481997586787
        ],
        [
          0,
          -300,
          0.16236415202729404
        ],
        [
          0,
          0,
          0.9762564697302878
        ]
      ],
      systems: [
        {
          noise: 0.1729920324869454,
          star: {
            noise: 0.1729920324869454,
            name: 'curystea',
            lifespan: 0.023435002251062542,
            birth: 0.021246857691663713,
            type: 'O',
            radius: 29
          },
          planets: [
            {
              noise: 0.003682427743115113,
              radius: 5,
              material: 'water',
              gravity: 0.33571954910821655,
              populationCapacity: 202813
            },
            {
              noise: 0.09050320648202614,
              radius: 5,
              material: 'hydrogen',
              gravity: 1.1778811028756535,
              populationCapacity: 4725221
            },
            {
              noise: 0.05456950161124041,
              radius: 5,
              material: 'plutonium',
              gravity: 0.829324165629032,
              populationCapacity: 2853470
            }
          ],
          orbits: [
            {
              starTranslation: 1,
              radius: 50
            },
            {
              starTranslation: 32,
              radius: 70
            },
            {
              starTranslation: 19,
              radius: 90
            }
          ]
        },
        {
          noise: 0.9443481997586787,
          star: {
            noise: 0.9443481997586787,
            name: 'つるぎ杖',
            lifespan: 0.09535533631583348,
            birth: 0.04884088568481798,
            type: 'O',
            radius: 27
          },
          planets: [
            {
              noise: 0.6322632420419723,
              radius: 6,
              material: 'manganese',
              gravity: 6.43295344780713,
              populationCapacity: 32944960
            },
            {
              noise: 0.5936842787987189,
              radius: 6,
              material: 'selenium',
              gravity: 6.058737504347572,
              populationCapacity: 30935420
            }
          ],
          orbits: [
            {
              starTranslation: 227,
              radius: 53
            },
            {
              starTranslation: 213,
              radius: 75
            }
          ]
        },
        {
          noise: 0.16236415202729404,
          star: {
            noise: 0.16236415202729404,
            name: '首飾り雷神の',
            lifespan: 0.6160320607432368,
            birth: 0.16444156064193047,
            type: 'K',
            radius: 14
          },
          planets: [
            {
              noise: 0.9140139793648814,
              radius: 7,
              material: 'polonium',
              gravity: 9.165935599839349,
              populationCapacity: 47621074
            },
            {
              noise: 0.040582900275694556,
              radius: 5,
              material: 'water',
              gravity: 0.6936541326742371,
              populationCapacity: 2124922
            },
            {
              noise: 0.9568011278743143,
              radius: 7,
              material: 'tellurium',
              gravity: 9.580970940380848,
              populationCapacity: 49849813
            }
          ],
          orbits: [
            {
              starTranslation: 329,
              radius: 54
            },
            {
              starTranslation: 14,
              radius: 74
            },
            {
              starTranslation: 344,
              radius: 98
            }
          ]
        },
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
