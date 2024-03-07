// import { JsonObject, Primitive } from "type-fest";
// import Axios, {
//   AxiosBasicCredentials,
//   AxiosError,
//   AxiosRequestConfig,
//   AxiosResponse,
//   RawAxiosRequestHeaders,
// } from "axios";
// import {
//   ApiDetailType,
//   ManagedAxiosError,
//   RequestBodyType,
//   RequestDataType,
//   RequestMethod,
//   TransformedRequestData,
// } from "@/lib/api-request/api-types";
// import TokenService from "@/service/token/token.service";
// import { pathParamSanitizer } from "@/utility/sanitizer/sanitizer";
// import { publicRoutePath } from "@/router";
// import { publicApiEndpointsConstants } from "@/constants/public-api-endpoints.constants";
// import { LoginResponse } from "@/core/public/Authentication/Login/login.schema";

// export const basicAuthCredentials: AxiosBasicCredentials = {
//   username: "clientid",
//   password: "secret",
// };

// // UNUSED
// export const abortController = new AbortController();
// // auto abort the request, this is for connection timeout
// setTimeout(() => {
//   abortController.abort("Request Time out");
// }, 60 * 3 * 1000);
// // AA

// /**
//  * get basic auth based on request body type
//  * @param requestBodyType
//  */
// export const getBasicAuthCredentials = (requestBodyType: RequestBodyType | undefined) => {
//   if (!requestBodyType) return;
//   if ([RequestBodyType.BASIC_AUTH, RequestBodyType.NO_AUTH].includes(requestBodyType)) return basicAuthCredentials;
// };

// export function getQueryString(data: GenericObj): URLSearchParams {
//   return new URLSearchParams(data);
// }

// export const sanitizeApiController = (
//   apiDetail: ApiDetailType,
//   pathVariables?: GenericObj<Primitive>,
// ): ApiDetailType => {
//   let controllerName = apiDetail.controllerName;
//   if (pathVariables && Object.keys(pathVariables).length)
//     controllerName = pathParamSanitizer(apiDetail.controllerName, pathVariables, "{}");

//   return Object.assign(apiDetail, {
//     controllerName,
//     hasEncryptedResponse: apiDetail.hasEncryptedResponse ?? true,
//     encryptRequest: apiDetail.encryptRequest ?? true,
//   });
// };

// export const getRequestHeaders = (apiDetails: ApiDetailType) => {
//   const token = TokenService.getAccess();

//   const headers: RawAxiosRequestHeaders = {
//     "Content-Type": "application/json",
//     "Accept-Language": "en",
//     ...(token && { Authorization: `Bearer ${token}` }),
//   };

//   switch (apiDetails.requestBodyType) {
//     case RequestBodyType.QUERY_STRING:
//       return Object.assign(headers, { "Content-Type": "application/x-www-form-urlencoded" });
//     case RequestBodyType.FORM_DATA:
//       return Object.assign(headers, { "Content-Type": "multipart/form-data" });
//     case RequestBodyType.BASIC_AUTH:
//     case RequestBodyType.NO_AUTH: {
//       delete headers.Authorization;
//       return headers;
//     }
//     default:
//       return headers;
//   }
// };

// /**
//  * TODO: DIWASH BARAL --> Rewrite the complete getFormData Function
//  * @param requestData
//  */
// export const getFormData = (requestData: RequestDataType) => {
//   const formData = new FormData();
//   // eslint-disable-next-line guard-for-in,no-restricted-syntax
//   for (const data of Object.keys(requestData)) {
//     const requestDataPair = requestData[data];
//     if (Array.isArray(requestDataPair)) {
//       // todo : code is unreachable
//       requestDataPair.forEach((dataEl, index: number) => {
//         if (dataEl instanceof Object && !(dataEl instanceof File || dataEl instanceof Blob)) {
//           Object.keys(dataEl).forEach((elKey) => formData.append(`${data}[${index}].${elKey}`, dataEl[elKey]));
//         } else if (dataEl instanceof File) {
//           // formData.append(data, dataEl);
//           formData.append(`${data}`, dataEl);
//         } else if (typeof dataEl === "number" || typeof dataEl === "string") {
//           formData.append(`${data}[${index}]`, dataEl.toString());
//         }
//       });
//     } else if (
//       requestData[data] instanceof Object &&
//       !(requestData[data] instanceof File) &&
//       !(requestData[data] instanceof Blob)
//     ) {
//       // todo : this code is reachable only if requestData[data] is ArrayBuffer, but using object.entries in ArrayBuffer is meaningless
//       Object.entries(requestData[data] as object).forEach(([key, value]) =>
//         formData.append(`${data}.${key}`, value as string),
//       );
//     } else {
//       formData.append(data, requestData[data] as string);
//     }
//   }
//   return formData;
// };

// /**
//  * Transform request data according to request body type
//  * @param apiDetails
//  * @param requestData
//  */
// export const transformRequestData = (
//   apiDetails: ApiDetailType,
//   requestData?: RequestDataType,
// ): TransformedRequestData => {
//   if (!requestData) return {};

//   switch (apiDetails.requestBodyType) {
//     case RequestBodyType.FORM_DATA:
//       return getFormData(requestData);
//     case RequestBodyType.QUERY_STRING:
//       return getQueryString(requestData as GenericObj);
//     default: {
//       if (apiDetails.encryptRequest) return { request: requestData };
//       return requestData;
//     }
//   }
// };

// export const manageErrorResponse = (error: AxiosError<BackendErrorResponse<JsonObject>>): ManagedAxiosError => {
//   const { message, config, request, response, isAxiosError, code } = error;
//   const errorResponse: ManagedAxiosError = {
//     message, // Something happened in setting up the request that triggered an Error
//     data: response?.data as BackendErrorResponse<JsonObject>,
//     statusCode: response?.status,
//     noconnection: false,
//     config, // Request Params Configs
//     isAxiosError, // If Axios Error
//   };

//   // The server responded with a status code and data
//   if (response) errorResponse.data = { ...response.data, status: false };
//   // No server response
//   else if (request) {
//     errorResponse.data = {
//       error: {},
//       message: "Server could not be reached.",
//       status: false,
//     };
//     if (["ERR_NETWORK", "ERR_CANCELED", "ECONNABORTED"].includes(code ?? "")) errorResponse.noconnection = true;
//     else errorResponse.data.message = "Something Went Wrong!";
//   }

//   return errorResponse;
// };

// export const manageInvalidErrorResponse = (error: AxiosResponse<BackendErrorResponse<null>>) => {
//   const errorResponse: ManagedAxiosError = {
//     message: error.data.message ?? "Something Went Wrong!", // Something happened in setting up the request that triggered an Error
//     data: error?.data as BackendErrorResponse<null>,
//     statusCode: error?.status || 500,
//     noconnection: false,
//     config: error.config, // Request Params Configs
//     isAxiosError: false, // If Axios Error
//   };

//   return errorResponse;
// };

// export const getAxiosParams = (apiDetails: ApiDetailType, headers: RawAxiosRequestHeaders = {}) => {
//   const axiosRequestParams: AxiosRequestConfig = {
//     baseURL: apiDetails.baseUrl ?? import.meta.env.VITE_API_ENDPOINT,
//     url: apiDetails.controllerName,
//     method: apiDetails.requestMethod || RequestMethod.GET,
//     responseType: "json",
//     // this is for server response timeout
//     timeout: 60 * 3 * 1000,
//     signal: AbortSignal.timeout(60 * 3 * 1000),
//     headers: { ...getRequestHeaders(apiDetails), ...headers },
//   };

//   if (apiDetails.requestBodyType === RequestBodyType.FILE) axiosRequestParams.responseType = "blob";

//   return axiosRequestParams;
// };

// export const handleLogout = () => {
//   TokenService.clear();
//   window.location.replace(publicRoutePath.login);
// };

// /* ************** Refresh Token Implementation ************** */

// interface QueueItem {
//   resolve: (value: unknown) => void;
//   reject: (reason?: unknown) => void;
// }

// let isTokenRefreshing = false;

// // all the failed api queue's, while token is being refreshed
// let failedQueue: QueueItem[] = [];

// const processFailedRequest = (token: string) => {
//   failedQueue.forEach(({ resolve }) => {
//     resolve(token);
//   });
//   failedQueue = [];
// };

// export const refreshTokenApiDetails: ApiDetailType = {
//   controllerName: "refresh-token",
//   requestMethod: RequestMethod.POST,
// };

// export const requestRefreshToken = async (error: AxiosError<BackendErrorResponse<unknown>>) => {
//   const errorResponse = error.response;

//   if (
//     !errorResponse ||
//     (errorResponse.status !== 401 && errorResponse.data.error !== "invalid_token") ||
//     publicApiEndpointsConstants.includes(errorResponse.config?.url ?? "")
//   )
//     return Promise.reject(error);

//   const newRequest = { ...errorResponse.config };

//   /*
//    * if the token is refreshing, we queue the request so that,
//    * those can be executed after the token is refreshed
//    */
//   if (isTokenRefreshing) {
//     return new Promise((resolve, reject) => {
//       failedQueue.push({ reject, resolve });
//     })
//       .then((token) => {
//         Object.assign(newRequest.headers ?? {}, {
//           Authorization: `Bearer ${token}`,
//         });
//         return Axios.request(newRequest);
//       })
//       .catch((err) => {
//         Promise.reject(err);
//       });
//   }

//   isTokenRefreshing = true;

//   try {
//     const response = await Axios.request<BackendSuccessResponse<LoginResponse>>({
//       ...getAxiosParams(refreshTokenApiDetails),
//       data: {
//         refreshToken: TokenService.getRefresh(),
//       },
//     });

//     if (response?.data.status) {
//       TokenService.set(response.data.data);
//       processFailedRequest(response.data.data.access_token);
//       failedQueue = [];
//       isTokenRefreshing = false;
//       Object.assign(newRequest.headers ?? {}, {
//         Authorization: `Bearer ${response.data.data.access_token}`,
//       });
//       return await Axios.request(newRequest);
//     }
//     handleLogout();
//   } catch (err) {
//     if (error.config?.url === refreshTokenApiDetails.controllerName) return handleLogout();

//     return Promise.reject(err);
//   }
// };
