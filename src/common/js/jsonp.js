/*
 * @Author: jjsnc
 * @Date:   2017-12-13 14:26:47
 * @Last Modified by:   jjsnc
 * @Last Modified time: 2017-12-17 10:06:58
 */
import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 把 data 拼接到url上
// export function param(data) {
//   let url = ''
//   for (var k in data) {
//     let value = data[k] !== undefined ? data[k] : ''
//     url += `&$[k]=${encodeURIComponent(value)}`
//   }
//   return url ? url.substring(1) : ''
// }
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
