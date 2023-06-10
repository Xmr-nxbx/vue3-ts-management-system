import service from ".";

import { loginDataInterface } from "@/type/login";

// 登录接口
export function login(data: loginDataInterface) {
    return service.post("/login", data);
}

// 商品列表
export function getGoodsList() {
    return service.get("/getGoodsList");
}