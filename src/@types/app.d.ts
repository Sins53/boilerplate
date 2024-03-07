interface BackendSuccessResponse<T> {
  data: T;
  status: boolean;
  message: string;
  errors: null;
}

interface BackendErrorResponse<T> {
  error: T;
  status: boolean;
  message: string;
}

interface GenericObj<Value = string> {
  [key: string]: Value;
}