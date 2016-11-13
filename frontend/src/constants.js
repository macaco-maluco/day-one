export const DYSON_SWARM_CONSTRUCTION_TIME = 1000
export const DYSON_SWARM_COST = 1000
export const DYSON_SWARM_ENERGY_GENERATION_FACTOR = 25

export const GRAVITY_MAXIMUM = 10
export const GRAVITY_MINIMUM = 0.3

export const GRID_PARTICLES = 150
export const GRID_SIZE = 300

export const INTRO_TIME = 16000

export const MATERIALS = [
  'water',
  'plutonium',
  'hydrogen',
  'iron',
  'carbon',
  'titanium'
]

export const ORBIT_STEP_MAXIMUM = 25
export const ORBIT_STEP_MINIMUM = 20

export const PLANET_RADIUS_MINIMUM = 5
export const PLANET_RADIUS_MAXIMUM = 8

export const POPULATION_CAPACITY_MINIMUM = 11000
export const POPULATION_CAPACITY_MAXIMUM = 52100000
export const POPULATION_INITIAL = 1000
export const POPULATION_GROWTH_FACTOR = 13
export const POPULATION_ONBOARD_SIZE = 100

export const ENERGY_POPULATION_CONSUMPTION_FACTOR = 0.1
export const ENERGY_CONSUMPTION_FACTOR = 100
export const ENERGY_INITIAL = 5000

export const SOLAR_SYSTEM_CUT_FACTOR = 0.7
export const SOLAR_SYSTEM_PLANETS_MAXIMUM = 4
export const SOLAR_SYSTEM_PLANETS_MINIMUM = 2
export const SOLAR_SYSTEM_STAGES = {
  ACCRETION_DISK: 'accretion_disk',
  FUSION_START: 'fusion_start',
  MAIN_SEQUENCE: 'main_sequence',
  RED_GIANT: 'red_giant',
  SUPERNOVA: 'supernova',
  BLACK_HOLE: 'black_hole',
  NEUTRON_STAR: 'neutron_star',
  WHITE_DWARF: 'white_dwarf',
  BROWN_DWARF: 'brown_dwarf'
}
export const SOLAR_SYSTEM_LIFESPAN_THRESHOLDS = {
  BLACK_HOLE: 0.1,
  NEUTRON_STAR: 0.2,
  WHITE_DWARF: 0.5,
  BROWN_DWARF: 1
}

export const STAR_RADIUS_MINIMUM = 5
export const STAR_RADIUS_MAXIMUM = 30
export const STAR_TYPES = {
  M: 'M',
  K: 'K',
  G: 'G',
  F: 'F',
  O: 'O'
}
export const STAR_TYPES_THRESHOLDS = {
  O: 0.2,
  F: 0.4,
  G: 0.6,
  K: 0.8,
  M: 1
}
export const STAR_END_STAGES = {
  BLACK_HOLE: SOLAR_SYSTEM_STAGES.BLACK_HOLE,
  NEUTRON_STAR: SOLAR_SYSTEM_STAGES.NEUTRON_STAR,
  WHITE_DWARF: SOLAR_SYSTEM_STAGES.WHITE_DWARF,
  BROWN_DWARF: SOLAR_SYSTEM_STAGES.BROWN_DWARF
}

export const UNIVERSE_LIFESPAN = 1000 * 60 * 60 * 24 * 7 // one week
export const UNIVERSE_BIG_BANG = 1479024348172
export const UNIVERSE_SIZE = 10000000000000000 // 10 ^ 16

export const FUSION_DURATION = 1000 / UNIVERSE_LIFESPAN
export const SUPERNOVA_DURATION = 1000 / UNIVERSE_LIFESPAN
export const RED_GIANT_DURATION = 2000 / UNIVERSE_LIFESPAN

export const EVENT_LOOP = 1000
export const EVENT_LOOP_CAP = 2000

export const SEED = 'the-first-day-the-day-one'

export const NAME_WORDS_MINIMUM = 2
export const NAME_WORDS_MAXIMUM = 2
