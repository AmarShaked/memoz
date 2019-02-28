
export const COMPLETE_MEMO_CYCLE = '@memoz/COMPLETE_MEMO_CYCLE';
export const REMOVE_MEMO_CYCLE = '@memoz/REMOVE_MEMO_CYCLE';
export const CHANGE_MEMO_TITLE = '@memoz/CHANGE_MEMO_TITLE';
export const ADD_MEMO = '@memoz/ADD_MEMO';
export const DELETE_MEMO = '@memoz/DELETE_MEMO';

export const completeMemoCycle = id => ({ type: COMPLETE_MEMO_CYCLE, id });
export const removeMemoCycle = id => ({ type: REMOVE_MEMO_CYCLE, id });
export const addMemo = () => ({ type: ADD_MEMO });
export const deleteMemo = id => ({ type: DELETE_MEMO, id });
export const changeMemoTitle = (id, value) => ({ type: CHANGE_MEMO_TITLE, id, value });
