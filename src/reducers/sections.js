import initialState from 'json!../fecSettings.json';
import * as utils from '../utils';

const sections = (state = initialState, action) => {
  let items;
  switch (action.type) {
    case 'UNSELECT_ALL_SECTIONS':
      items = state.items.map((s) => {
        s.selected = false;
        return s;
      });
      return Object.assign({}, state, { items:items })
    case 'SELECT_SECTION':
      items = state.items.map((s) => {
        s.selected = (utils.cleanSpecialChars(s.name, true, true) === action.sectionName);
        return s;
      });
      return Object.assign({}, state, { items:items });
    default:
      return Object.assign({}, state);
  }
}

export default sections;