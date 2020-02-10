// 定义全局状态
import { State } from './type'
export const state: State = {
    name: '',
    isLogin: false,
    curScreen: '0', // 0为pc， 1为移动
    config: {
        header: {
            columns: ['首页', '产品', '技术', '运营', '商业'],
            height: '50',
            backgroundColor: '#000000',
            logo: ''
        }
    },
    // ...
    articleDetail: null
}