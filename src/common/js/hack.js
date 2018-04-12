/*
* @Author: jjsnc
* @Date:   2018-04-12 14:33:44
* @Last Modified by:   jjsnc
* @Last Modified time: 2018-04-12 14:33:46
*/
// hack for global nextTick

function noop() {

}

window.MessageChannel = noop
window.setImmediate = noop