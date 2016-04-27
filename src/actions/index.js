export const selectSection = (sectionName, a) => {
  console.log('selectSection', sectionName, a);
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