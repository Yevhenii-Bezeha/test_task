const { createSlice, isAnyOf } = require("@reduxjs/toolkit");
const { fetchCampersThunk } = require("./operations");

const initialState = {
  catalog: [],
  currentId: null,
  isLiked: false,
  isLoading: false,
  error: null,
  page: 1,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,

  reducers: {
    setCurrentId: (state, { payload }) => {
      state.currentId = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, { payload }) => {
        state.catalog = [...state.catalog, ...payload];
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchCampersThunk.pending), (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchCampersThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { currentId } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
