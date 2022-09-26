import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ["USERFORMS", "FORM"],
  endpoints: (builder) => ({
    createForm: builder.mutation<any, any>({
      query: (body) => ({
        url: "forms",
        method: "POST",
        body,
      }),
      invalidatesTags: ["USERFORMS"],
    }),
    updateForm: builder.mutation<any, any>({
      query: ({ body, formId }) => ({
        url: `forms/${formId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["USERFORMS", "FORM"],
    }),
    getForm: builder.query<any, any>({
      query: (formID) => ({
        url: `forms/${formID}`,
      }),
      providesTags: ["FORM"],
    }),
    submitForm: builder.mutation<any, any>({
      query: ({ formId, response: body }) => ({
        url: `forms/${formId}`,
        method: "POST",
        body,
      }),
    }),
    getUserForms: builder.query<any, void>({
      query: () => "me/forms",
      providesTags: ["USERFORMS"],
    }),
  }),
});
export const {
  useCreateFormMutation,
  useSubmitFormMutation,
  useGetFormQuery,
  useGetUserFormsQuery,
  useUpdateFormMutation,
} = formApi;
