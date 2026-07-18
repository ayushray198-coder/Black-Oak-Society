const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,

  MODE: import.meta.env.MODE,

  DEV: import.meta.env.DEV,

  PROD: import.meta.env.PROD,
};

export default Object.freeze(ENV);