import React from 'react'
import MainSequence from './main-sequence'
import AccretionDisk from './accretion-disk'
import DeadStar from './dead-star'
import {SOLAR_SYSTEM_STAGES, STAR_TYPES} from 'constants'

export default function ({radius, type, stage, name}) {
  return <g>
    <AccretionDisk
      radius={radius * 5}
      expanded={stage === SOLAR_SYSTEM_STAGES.ACCRETION_DISK}
    />
    <MainSequence
      name={name}
      radius={getStarRadius(stage, radius)}
      type={getStarType(stage, type)}
      opacity={getStarOpacity(stage)}
    />
    <DeadStar
      radius={getDeadStarRadius(stage)}
      opacity={getDeadStarOpacity(stage)}
      stage={stage}
    />
  </g>
}

function getStarOpacity (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.FUSION_START:
    case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
    case SOLAR_SYSTEM_STAGES.RED_GIANT:
      return 1

    default:
      return 0
  }
}

function getDeadStarRadius (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return 5

    default:
      return 0
  }
}

function getStarType (stage, type) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.RED_GIANT:
    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
      return STAR_TYPES.M

    case SOLAR_SYSTEM_STAGES.SUPERNOVA:
    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
      return STAR_TYPES.F

    default:
      return type
  }
}

function getStarRadius (stage, radius) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.RED_GIANT:
    case SOLAR_SYSTEM_STAGES.SUPERNOVA:
      return radius * 5

    default:
      return radius
  }
}

function getDeadStarOpacity (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return 1

    default:
      return 0
  }
}
