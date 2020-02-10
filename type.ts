// 用来定义state等的类型文件
export interface State {
  name: string;
  isLogin: boolean;
  config: Config;
  [propName: string]: any;  // 用来定义可选的额外属性
}

export interface Config {
  header: HeaderType,
  banner: Banner,
  bannerSider: BannerSider,
  supportPay: SupportPay
}

export interface Response {
  [propName: string]: any;
}