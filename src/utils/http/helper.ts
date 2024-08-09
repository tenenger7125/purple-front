import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { RestResponseType } from "@/types/res/response";
// import { getCookie } from "cookies-next";
import { TOKEN_SAVE_KEY } from "@/utils/tokenService";

export function httpConfigHelper(config: InternalAxiosRequestConfig) {
  const token = window.localStorage.getItem(TOKEN_SAVE_KEY);
  // const accessToken = getCookie(TOKEN_SAVE_KEY);
  // console.log("accessToken");
  // console.log(accessToken);
  // console.log(window);
  token && config.headers.set("x-authentication-header", `Bearer ${token}`);
  return config;
}

export function httpParserHelper(response: AxiosResponse<RestResponseType>) {
  const code = response.status;
  if (code != 200) {
    const error = new Error();
    error.name = code;
    error.message = "Internal Error";
    error.cause = "DEFINED";
    throw error;
  }
  return response;
}
