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
          3.073098656022921,
          117.40606719395146,
          0.5548876167740673
        ]
      ]
    })
  })
})
