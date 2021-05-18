const urls = {
  check: (url: string) => url.replace("//", "/"),

  LOGIN: "/login",
  REGISTRATION: "/registration",
  MAIN: "/main",
  GOOGLE: "https://www.google.com/",
  FORM: "/form",

  NOT_FOUND: "/404",
  INTERNAL_SERVER_ERROR: "/500",
};

export default urls;
