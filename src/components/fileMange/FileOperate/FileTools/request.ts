import axios from 'axios'
const headersParm = {
  appId: 'RxrRZJWPRsd2Z2PM9u',
  appSecret: 'wawOhkjQgaiTQjlkqhAcvOnNEhOmmmSSNfsUvo6bXPSpGDz9NXtxifhMAfY0Sp3P'
}
const base_url = 'https://file.test.com'
const request = (option: any) => {
  const { url, method, params, data } = option
  console.log(option)
  return axios({
    method,
    url: base_url + url,
    data,
    params,
    headers: headersParm
  }).then((res) => {
    console.log(res)
    if (res.status == 200) {
      return res.data as any
    } else {
      return res as any
    }
  })
}

export default {
  get: <T = any>(option: any) => {
    return request({ method: 'get', ...option }) as Promise<IResponse<T>>
  },
  post: <T = any>(option: any) => {
    return request({ method: 'post', ...option }) as Promise<IResponse<T>>
  },
  delete: <T = any>(option: any) => {
    return request({ method: 'delete', ...option }) as Promise<IResponse<T>>
  },
  put: <T = any>(option: any) => {
    return request({ method: 'put', ...option }) as Promise<IResponse<T>>
  }
}
