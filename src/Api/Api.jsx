import axios from "axios";

// let BaseURL = process.env.REACT_APP_API;
let BaseURL = "https://papi.darkwolve.xyz/";

const token = () => {
  let token = JSON.parse(localStorage.getItem("userData"));
  return token?.token;
};

export const getUserData = () =>{
  if (localStorage.getItem("userData"))
  {

    return JSON.parse(localStorage.getItem("userData"));
  }
  else{
    return {}
  }
}
let headers = {
  authorization: token(),
};

export const Bucket = process.env.REACT_APP_BUCKET;

export const ApiGetNoAuth = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + type)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiPostNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiPutNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiDeleteNoAuth = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + type)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiGet = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + type, { headers: headers })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
            //   signout();
            console.log("auth token error");
          } else {
            reject(error?.response?.data);
          }
        } else {
          console.log(error);
          reject(error);
        }
      });
  });
};

export const ApiPost = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + type, userData, { headers: headers })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
            //   signout();
            console.log("auth token error");
          } else {
            reject(error?.response?.data);
          }
        } else {
          console.log(error);
          reject(error);
        }
      });
  });
};

export const ApiPut = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + type, userData, { headers: headers })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
            //   signout();
            console.log("auth token error");
          } else {
            reject(error?.response?.data);
          }
        } else {
          console.log(error);
          reject(error);
        }
      });
  });
};

export const ApiDelete = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseURL + type, { headers: headers })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
            //   signout();
            console.log("auth token error");
          } else {
            reject(error?.response?.data);
          }
        } else {
          console.log(error);
          reject(error);
        }
      });
  });
};
