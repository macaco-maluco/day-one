import calculateStage from './stage'

describe('universe | moment | stage', () => {
  it('should return Accretion Disk', () => {
    const stages = [
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

    const currentStage = calculateStage(stages)(0.0001)

    expect(currentStage).toEqual('Accretion Disk')
  })

  it('should return Star', () => {
    const stages = [
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

    const currentStage = calculateStage(stages)(0.2)

    expect(currentStage).toEqual('Star')
  })

  it('should return Brown Dwarf', () => {
    const stages = [
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

    const currentStage = calculateStage(stages)(0.98)

    expect(currentStage).toEqual('Brown Dwarf')
  })
})
