import service from ".";

interface loginDataInterface {
    username: string,
    password: string,
}

interface loginResponseInterface {
    code: number,
    msg: string,
    token: string
}

export function login(data: loginDataInterface): Promise<loginResponseInterface> {
    return service.post("/login", data);
}