import generateStructure from './structure'

describe('universe | quadrant | structure', () => {
  it('should generate a list of cells with an associated noise', () => {
    const quadrant = {
      noise: 0.15,
      size: [10, 10],
      coordinates: [0, 0]
    }

    const structure = generateStructure({})(quadrant)

    expect(structure).toEqual({
      ...quadrant,
      cells: [
        [
          -300,
          -300,
          0.3296459405682981
        ],
        [
          -300,
          0,
          0.8153412374667823
        ],
        [
          0,
          -300,
          0.9162520614918321
        ],
        [
          0,
          0,
          0.5548876167740673
        ]
      ]
    })
  })
})
