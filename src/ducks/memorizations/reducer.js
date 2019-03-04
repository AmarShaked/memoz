import { useReducer } from 'react';
import { generateId } from '../../helpers/id';
import {
  COMPLETE_MEMO_CYCLE,
  REMOVE_MEMO_CYCLE,
  CHANGE_MEMO_TITLE,
  ADD_MEMO,
  DELETE_MEMO,
} from './actions';
import { LS_MEMO_KEY } from '../../constants/localStorage';
import initialValue from './data';

const generateEmptyMemo = () => ({
  id: generateId(),
  title: '',
  memorization: [],
});

function initMemorization() {
  try {
    const item = window.localStorage.getItem(LS_MEMO_KEY);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case COMPLETE_MEMO_CYCLE:
      return state.map((memo) => {
        if (memo.id !== action.id) {
          return memo;
        }

        return {
          ...memo,
          memorization: [
            ...memo.memorization.map(
              (m, i, memorization) => (i === memorization.length - 1 ? true : m),
            ),
            false,
          ],
        };
      });
    case REMOVE_MEMO_CYCLE:
      return state.map((memo) => {
        if (memo.id !== action.id) {
          return memo;
        }

        return {
          ...memo,
          memorization: memo.memorization
            .filter((m, i, memorization) => i !== memorization.length - 1)
            .map((m, i, a) => (i === a.length - 1 ? false : m)),
        };
      });
    case CHANGE_MEMO_TITLE:
      return state.map((memo) => {
        if (memo.id !== action.id) {
          return memo;
        }

        let { memorization } = memo;

        if (!memo.title && action.value && !memorization.length) {
          memorization = [false];
        }

        return {
          ...memo,
          memorization,
          title: action.value,
        };
      });
    case ADD_MEMO:
      return [...state, generateEmptyMemo()];
    case DELETE_MEMO:
      if (state.length > 1) {
        return state.filter(memo => memo.id !== action.id);
      }

      return [generateEmptyMemo()];

    default:
      throw new Error();
  }
}

const persistReducer = (state, action) => {
  const currentState = reducer(state, action);

  try {
    // Save to local storage
    window.localStorage.setItem(LS_MEMO_KEY, JSON.stringify(currentState));
  } catch (error) {
    // A more advanced implementation would handle the error case
    console.log(error);
  }

  return currentState;
};

export default () => useReducer(persistReducer, [], initMemorization);
