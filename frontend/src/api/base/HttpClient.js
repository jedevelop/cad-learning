import axios from 'axios'

export default function (basePath = '') {
  this.axiosInstance = null
  const apiUrl = 'http://localhost:8080'
  let config = {
    baseURL: `${apiUrl}${basePath}`,
  }
  this.axiosInstance = axios.create(config)

  // this.axiosInstance.interceptors.request.use(config => {
  //   if (store.state.Auth.token) config.headers.Authorization = `Bearer ${store.state.Auth.token}`;
  //   return config;
  // }, error => {
  //   return Promise.reject(error);
  // });
  this.axiosInstance.interceptors.response.use(response => {
    return response;
  }, error => {
    // if (error.response.status === 401 && !error.config._retry) {
    //   error.config._retry = true;
    //   if (location.pathname !== '/login')
    //     router.push({
    //       name: '401'
    //     });
    //   return;
    // }
    return Promise.reject(error.response ? error.response : error);
  });

  this.axiosInstance.title = function (title) {
    title = title || 'cad-web';
    window.document.title = title;
  };
  return this.axiosInstance
}
