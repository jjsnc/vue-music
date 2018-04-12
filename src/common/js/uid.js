/*
* @Author: jjsnc
* @Date:   2018-04-12 14:26:14
* @Last Modified by:   jjsnc
* @Last Modified time: 2018-04-12 14:26:29
*/
let _uid = ''

export function getUid() {
  if (_uid) {
    return _uid
  }
  if (!_uid) {
    const t = (new Date).getUTCMilliseconds()
    _uid = '' + Math.round(2147483647 * Math.random()) * t % 1e10
  }
  return _uid
}

