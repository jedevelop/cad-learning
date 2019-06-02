import Api from '../base/Api'

export const LOGIN = 'login'
export const REGISTER = 'register'

class Auth extends Api {
  /**
   * auth client
   * @param data client
   * @returns {AxiosPromise<any> | * | void}
   */
  login(data) {
    return this.http.post(LOGIN, data)
  }

  /**
   * register new client
   * @param data register
   * @returns {AxiosPromise<any> | * | void}
   */
  register(data) {
    return this.http.post(REGISTER, data)
  }

}

export default new Auth('/auth')
