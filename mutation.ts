import { 
  State,
  Config, 
  HeaderType, 
  Banner,
  BannerSider,
  SupportPay
} from './type'

export default {
  // 预览模式
  setScreen(state: State, payload: string) {
      state.curScreen = payload;
  },

  // 删除banner图
  delBanner(state: State, payload: number) {
      state.config.banner.bannerList.splice(payload, 1);
  },

  // 添加banner图
  addBanner(state: State, payload: object) {
      state.config.banner.bannerList.push(payload);
  },

  // ...
}