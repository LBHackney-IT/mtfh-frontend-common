import $kr0JH$axios from "axios";
import $kr0JH$swr from "swr";
import $kr0JH$swrinfinite from "swr/infinite";

// export { axiosInstance } from './http/http'

const $31c17c4cc7aaa36d$export$155ec85c4e3b5e85 = (0, $kr0JH$axios).create({
    responseType: "json"
}); // axiosInstance.interceptors.request.use((reqConfig) => {
 //   const req: Config = {
 //     ...reqConfig,
 //     headers: {
 //       ...reqConfig.headers,
 //       Authorization: `Bearer ${$auth.getValue().token}`,
 //       ...(reqConfig.headers["skip-x-correlation-id"]
 //         ? {}
 //         : { "x-correlation-id": uuid() }),
 //     },
 //   };
 //   delete req.headers["skip-x-correlation-id"];
 //   if (req.method === "patch" && Object.keys(req.data || {}).includes("etag")) {
 //     req.headers["If-Match"] = req.data.etag;
 //     delete req.data.etag;
 //   }
 //   return req;
 // });
 // axiosInstance.interceptors.response.use(
 //   (res) => {
 //     if (res.config.method === "get" && res.data?.id) {
 //       res.data.etag = res.headers.etag;
 //     }
 //     return res;
 //   },
 //   (error: AxiosError) => {
 //     if (error.response?.status === 403) {
 //       if (isAuthorised()) {
 //         logout();
 //       }
 //     }
 //     throw error;
 //   },
 // );
 // export const createCancelToken = (): CancelTokenSource => axios.CancelToken.source();
 // export const isAxiosError = (e: unknown): e is AxiosError => axios.isAxiosError(e);





const $88fa3d186dcadbc0$export$91375b104025299 = (options = {})=>(url)=>(0, $31c17c4cc7aaa36d$export$155ec85c4e3b5e85).get(url, options).then((res)=>res.data);
const $88fa3d186dcadbc0$export$a84fc53129590f47 = (key, options = {})=>(0, $kr0JH$swr)(key, $88fa3d186dcadbc0$export$91375b104025299(options), {
        shouldRetryOnError: false,
        ...options
    });
const $88fa3d186dcadbc0$export$18b3a6cf21214f90 = (key, options = {})=>(0, $kr0JH$swrinfinite)(key, $88fa3d186dcadbc0$export$91375b104025299(options), options);






const $1c15e570107e2424$export$c7bd411105e2dec3 = "Callum";


export {$1c15e570107e2424$export$c7bd411105e2dec3 as Name, $31c17c4cc7aaa36d$export$155ec85c4e3b5e85 as axiosInstance};
//# sourceMappingURL=mtfh-common.js.map
