/*
 * @Author: jjsnc
 * @Date:   2017-12-13 14:48:39
 * @Last Modified by:   jjsnc
 * @Last Modified time: 2017-12-13 15:23:34
 */

// 如果引用的其它js文件模块 是export default 不需要使用{} 否则要使用{}
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  // Object.assign() 是es6 新增的语法
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
