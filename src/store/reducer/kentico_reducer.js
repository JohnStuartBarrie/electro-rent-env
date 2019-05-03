import { KenticoConstants } from '../../constant/action_constants'

const initialState = {
  kenticoData: {},
  isFetching: false,
  isError: false
};

const kenticoReducer = (state = initialState, action) => {
  switch (action.type) {
    case KenticoConstants.FETCHING_COFFEE :
      state = { ...state }
      break;
    case KenticoConstants.FETCHED_COFFEE :
      state = { ...state, kenticoData: action.data }
      console.log(state)
      break;
    default :
  }
  return state;
};

export default kenticoReducer;
