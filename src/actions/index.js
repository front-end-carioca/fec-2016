export const selectSection = (sectionName) => {
  return {
    type: 'SELECT_SECTION',
    sectionName
  }
}

export const unselectAllSections = () => {
  return {
    type: 'UNSELECT_ALL_SECTIONS'
  }
}