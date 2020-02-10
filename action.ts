// action.ts
import { 
  HeaderType,
  Response
} from './type'
import http from '../utils/http'
import { uuid, formatTime } from '../utils/common'
import { message } from 'ant-design-vue'

export default {
  /**配置 */
  setConfig(context: any, paylod: HeaderType) {
      http.get('/config/all').then((res:Response) => {
          context.commit('setConfig', res.data)
      }).catch((err:any) => {
          message.error(err.data)
      })
  },
  /**header */
  saveHeader(context: any, paylod: HeaderType) {
      http.post('/config/setHeader', paylod).then((res:Response) => {
          message.success(res.data)
          context.commit('saveHeader', paylod)
      }).catch((err:any) => {
          message.error(err.data)
      })  
  },
  // ...
}