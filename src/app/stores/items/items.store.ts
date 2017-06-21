/**
 * Created by PACHAURI on 16-May-17.
 */
export const items = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_ITEMS' :
      return payload;
    case 'CREATE_ITEM' :
      return [...state, payload];
    case 'UPDATE_ITEM' :
      return state.map(function (item) {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });
    case 'DELETE_ITEM' :
      return state.filter(function (item) {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
}
