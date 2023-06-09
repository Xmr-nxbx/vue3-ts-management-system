// 约束LoginView数据结构
export interface RuleFormInterface {
  username: string;
  password: string;
}

// login请求
export interface loginDataInterface {
  username: string,
  password: string,
}

// login返回值
export interface loginResponseInterface {
  code: number,
  msg: string,
  token: string
}