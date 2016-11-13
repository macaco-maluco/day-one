import React from 'react'
import AccretionDisk from './accretion-disk'
import MainSequence from '../solar-system'
import Supernova from './supernova'
import FusionStart from './fusion-start'
import NeutronStar from './neutron-star'
import BlackHole from './black-hole'
import RedGiant from './red-giant'
import WhiteDwarf from './white-dwarf'
import BrownDwarf from './brown-dwarf'
import {SOLAR_SYSTEM_STAGES} from 'constants'

export default function SolarSystem ({stage, ...props}) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.FUSION_START:
      return <FusionStart {...props} />

    case SOLAR_SYSTEM_STAGES.ACCRETION_DISK:
      return <AccretionDisk {...props} />

    case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
      return <MainSequence {...props} />

    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
      return <NeutronStar {...props} />

    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
      return <BlackHole {...props} />

    case SOLAR_SYSTEM_STAGES.SUPERNOVA:
      return <Supernova {...props} />

    case SOLAR_SYSTEM_STAGES.RED_GIANT:
      return <RedGiant {...props} />

    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
      return <WhiteDwarf {...props} />

    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return <BrownDwarf {...props} />
  }
}
