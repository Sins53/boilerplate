import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    // eslint-disable-next-line
    meta?: { [key: string]: any };
  }
}
