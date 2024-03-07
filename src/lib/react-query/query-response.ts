import { Mutation, MutationMeta, Query } from "@tanstack/query-core";
import { AxiosResponse } from "axios";
import { toast } from "@/components/ui";
import { toast as rToast } from "react-toastify";

import HttpException from "@/utility/exceptions/http-exception";

let toastId = "";

const message = {
  FILE_SIZE: "Please Upload the file less than 12 MB.",
  LONG_TO_RESPOND:
    "Server is taking too long to respond, this can be caused by either poor connectivity or an error with our servers. Please try again in a while!",
  SERVER_NOT_REACHED: "Server could not be reached",
};

let timeoutMessageCount = 0;
let noServerConnectionMessageCount = 0;
let longToRespondMessageCount = 0;

const onError = (httpException: HttpException, disableFailureToast = false) => {
  const { error } = httpException;

  const url = (error.config?.url || "") + (error.data?.message || "");

  if (toastId === url) rToast.dismiss(toastId);

  if (error?.statusCode === 413)
    toast.error(message.FILE_SIZE, {
      toastId: url,
    });

  if (!disableFailureToast && error?.data?.message)
    return toast.error(error.data.message, {
      toastId: url,
    });

  // Axios Timeout
  if (error.code === "ECONNABORTED" && !timeoutMessageCount) {
    timeoutMessageCount += timeoutMessageCount;
    return toast.error(message.SERVER_NOT_REACHED, {
      toastId: url,
    });
  }

  if (error.noconnection) {
    // No Server Connection
    if (error.code !== "ECONNABORTED" && !longToRespondMessageCount) {
      longToRespondMessageCount += longToRespondMessageCount;
      return toast.error(message.LONG_TO_RESPOND, {
        toastId: url,
      });
    }

    // No Connection
    if (error.message === message.SERVER_NOT_REACHED && !noServerConnectionMessageCount) {
      noServerConnectionMessageCount += noServerConnectionMessageCount;
      return toast.error(message.SERVER_NOT_REACHED, {
        toastId: url,
      });
    }
  }

  toastId = url as string;
};

const onQueryError = (responseError: unknown, query: Query) => {
  onError(responseError as HttpException, query.meta?.disableFailureToast);
};
const onMutationError = async (
  responseError: unknown,
  variables: unknown,
  context: unknown,
  mutation: Mutation<unknown, unknown, unknown>,
) => {
  onError(responseError as HttpException, mutation.meta?.disableFailureToast);
};
const onMutationSuccess = (
  responseData: unknown,
  variables: unknown,
  context: unknown,
  query: Mutation<unknown, unknown, unknown>,
) => {
  const res = responseData as AxiosResponse<BackendSuccessResponse<GenericObj>>;
  if (toastId.includes(res?.config?.url as string)) rToast.dismiss(toastId);

  if ((query.meta as MutationMeta)?.disableSuccessToast) return;

  if (res?.data?.message) toast.success(res?.data?.message);
};

export { onQueryError, onMutationError, onMutationSuccess };
