import service from ".";

import { loginDataInterface, loginResponseInterface } from "@/type/login";

export function login(data: loginDataInterface): Promise<loginResponseInterface> {
    return service.post("/login", data);
}

export function getGoodsList(data: any): Promise<any> {
    return service.get("/getGoodsList", data);
}