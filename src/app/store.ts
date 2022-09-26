import { configureStore } from "@reduxjs/toolkit";
import formBuilderSliceReducer from "./services/formBuilder/formBuilderSlice";
import { formApi } from "./services/formApi";
import formResponseReducer from "./services/formResponseSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [formApi.reducerPath]: formApi.reducer,
    formBuilder: formBuilderSliceReducer,
    formResponse: formResponseReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formApi.middleware),
});
