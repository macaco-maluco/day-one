import React from 'react'
import AccretionDisk from './accretion-disk'
import MainSequence from '../solar-system'
import WhiteDwarf from './white-dwarf'
import {SOLAR_SYSTEM_STAGES} from 'constants'

export default function SolarSystem ({stage, ...props}) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.ACCRETION_DISK:
      return <AccretionDisk {...props} />

    case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
      return <MainSequence {...props} />

    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
      return <WhiteDwarf {...props} />
  }
}
