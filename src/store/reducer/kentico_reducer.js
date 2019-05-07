import { KenticoConstants } from '../../constant/action_constants'

const initialState = {
  data: {},
  isFetching: false,
  isError: false
};

const kenticoReducer = (state = initialState, action) => {
  switch (action.type) {
    case KenticoConstants.FETCHING_COFFEE :
      state = { ...state }
      break;
    case KenticoConstants.FETCHED_COFFEE :
      state = { ...state, data: action.data }
      break;
    default :
  }
  return state;
};

export default kenticoReducer;
