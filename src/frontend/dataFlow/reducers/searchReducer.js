import { createMergeReducer } from "create-reducer-extra";

const initialState = {
  searching: false,
  error: null,
  results: [],
}

const reducer = createMergeReducer(initialState, {
  SearchStarted: () => ({error: null, searching: true}),
  SearchSuccess: ({}, payload) => ({searching: false, results: payload}),
  SearchFail: ({}, payload) => ({error: payload, searching: false}),
});

export default reducer;