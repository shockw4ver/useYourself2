const TAG_ID_MAP = {
  'REACT': 'react',
  'FP': 'fp',
  'JAVASCRIPT': 'js',
  'OOP': 'oop',
  'TYPESCRIPT': 'ts',
  'COROUTINES': 'co'
}

export default function getTagId(tag = '') {
  return TAG_ID_MAP[tag.toUpperCase()]
}