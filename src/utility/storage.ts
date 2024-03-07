  export const setToLocalStorage = <T>(key: string, value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key: string) => {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  };
  
  export const setToSessionStorage = <T>(key: string, value: T) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log('Error storing data in session storage:', e);
    }
  };
  
  export const getFromSessionStorage = (key: string) => {
    const value = window.sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  };