export const HEADER = { "Content-Type": "application/json" };
export const URL_SERVER = import.meta.env.PROD
  ? "https://wellnessbe.jacekku.net/"
  : "http://127.0.0.1:8000/";
export const PATH_CATEGORY = "api/category/";
export const PATH_MEETING = "api/meeting/";
export const PATH_LOCATIONS = "api/location/";
export const PATH_USER_API = "account/";
export const PATH_LOGIN = "login/";
export const PATH_REGISTER = "register/";
