import generatePlanet from '.'

describe('universe planet', () => {
  it('should generate a planet based on a noise', () => {
    const planet = generatePlanet({})(0.1)
    expect(planet).toEqual({
      noise: 0.1,
      radius: 5,
      material: 'hydrogen',
      gravity: 1.27,
      populationCapacity: 5219900
    })
  })
})
