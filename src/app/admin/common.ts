import { setClientCookie } from "../utils/index";
const logout = () => {
  setClientCookie("admin", "");
  window.location.href = "/";
};

export { logout };
