/**
 * Created by PACHAURI on 16-May-17.
 */
export const selectedItem = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_ITEM':
      return payload;
    default:
      return state;
  }
};
