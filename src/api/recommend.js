// 如果引用的其它js文件模块 是export default 不需要使用{} 否则要使用{}
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'
const debug = process.env.NODE_ENV !== 'production'
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

export function getDiscList() {
  // const url = '/api/getDiscList'
    // 线上环境地址，同学们根据自己的需要配置修改
  const url = debug ? '/api/getDiscList' : 'http://47.98.165.100/study-vue-music/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  // const url = '/api/getSongList'
   const url = debug ? '/api/getCdInfo' : 'http://47.98.165.100/study-vue-music/api/getCdInfo'
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
