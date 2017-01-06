import React from 'react'

export default function ({material, radius}) {
  return <circle
    className={`planet ${material}`}
    r={radius}
    fill={colors[material]}
    stroke='none'
  />
}

const colors = {
  'water': '#3fb9dd',
  'plutonium': '#97005d',
  'hydrogen': '#dcbbaf',
  'iron': '#ffffff',
  'carbon': '#48467b',
  'titanium': '#3feeac',
  'phosphorus': '#da2223',
  'sulphur': '#410d38',
  'nickel': '#cd8a9b',
  'vanadium': '#DF7B4E',
  'zircorium': '#420088',
  'zinc': '#324D65',
  'arsenic': '#78DE45',
  'selenium': '#FFFEED',
  'manganese': '#BF4800',
  'chromium': '#807070',
  'germanium': '#23133A',
  'mercury': '#5d607e',
  'tungsten': '#0F5E44',
  'cadmium': '#27C7B5',
  'niobium': '#8303F1',
  'polonium': '#ECEA00',
  'tellurium': '#92ADFD'
}
