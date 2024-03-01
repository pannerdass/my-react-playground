export function isAuthenticate() {
  if (sessionStorage.getItem("isAuthenticated") === null) return false;

  return sessionStorage.getItem("isAuthenticated");
}
