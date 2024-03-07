// import Axios, { AxiosError, AxiosResponse, RawAxiosRequestHeaders } from "axios";
// import { Primitive } from "type-fest";

// import HttpException from "@/utility/exceptions/http-exception";
// import {
//   getAxiosParams,
//   getBasicAuthCredentials,
//   handleLogout,
//   manageErrorResponse,
//   manageInvalidErrorResponse,
//   refreshTokenApiDetails,
//   requestRefreshToken,
//   sanitizeApiController,
//   transformRequestData,
// } from "@/lib/api-request/api-schema";
// import { ApiDetailType } from "@/lib/api-request/api-types";

// export interface InitApiRequest {
//   apiDetails: ApiDetailType;
//   pathVariables?: GenericObj<Primitive>;
//   params?: { [key: string]: Primitive | Array<GenericObj<Primitive>> };
//   // eslint-disable-next-line
//   requestData?: any;
//   signal?: AbortSignal;
//   headers?: RawAxiosRequestHeaders;
// }

// Axios.interceptors.response.use(
//   async (response) => {
//     if (response.data?.status === false && response.config?.url === refreshTokenApiDetails.controllerName)
//       handleLogout();

//     if (response.data?.status === false) return Promise.reject(response);
//     return response;
//   },

//   (error: AxiosError<BackendErrorResponse<unknown>>) => {
//     if (error.config?.url === refreshTokenApiDetails.controllerName) return handleLogout();
//     return requestRefreshToken(error);
//   },
// );

// const initApiRequest = async <TData>({
//   apiDetails,
//   pathVariables,
//   params,
//   headers,
//   signal,
//   requestData,
// }: InitApiRequest): // eslint-disable-next-line consistent-return
// Promise<AxiosResponse<TData> | undefined> => {
//   const sanitizedDetails = sanitizeApiController({ ...apiDetails }, pathVariables);
//   const axiosParams = getAxiosParams(sanitizedDetails, headers);

//   try {
//     return await Axios.request<TData>({
//       ...axiosParams,
//       params,
//       signal: signal ?? axiosParams.signal,
//       data: transformRequestData(sanitizedDetails, requestData),
//       auth: getBasicAuthCredentials(sanitizedDetails.requestBodyType),
//       meta: {
//         hasEncryptedResponse: sanitizedDetails.hasEncryptedResponse as boolean,
//       },
//     });
//   } catch (error) {
//     let managedError;
//     if ((error as AxiosResponse<BackendErrorResponse<null>>)?.data?.status === false)
//       managedError = manageInvalidErrorResponse(error as AxiosResponse<BackendErrorResponse<null>>);
//     else managedError = manageErrorResponse(error as AxiosError<BackendErrorResponse<GenericObj>>);
//     throw new HttpException(managedError);
//   }
// };

// export { initApiRequest };

// // 188c47d9da3fd7aa01b99ddcf689ba5c
// // 188c47d9da3fd7aa01b99ddcf689ba5c
