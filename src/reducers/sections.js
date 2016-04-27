import initialState from 'json!../fecSettings.json';

const sections = (state = initialState, action) => {
  console.log('reducers > sections', state, action);
  let items;
  switch (action.type) {
    // case 'UNSELECT_ALL_SECTIONS':
    //   items = state.items.map((s) => {
    //     s.selected = false;
    //     return s;
    //   })

    //   return Object.assign({}, state, { items:items })
    // case 'SELECT_SECTION':
    //   items = state.items.map((s) => {
    //     s.selected = (s.name === action.name) ;
    //     return s;
    //   })
    //   return Object.assign({}, state, { items:items })
    default:
      return Object.assign({}, state);
  }
}

export default sections;