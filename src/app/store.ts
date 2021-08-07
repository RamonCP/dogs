import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import { dogsApi } from '../features/dogs/dogs-api-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
		[dogsApi.reducerPath]: dogsApi.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
