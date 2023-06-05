import Mock from 'mockjs';

const loginData = {
    users: [
        { username: "admin", password: "123456", questions: [{ q: "你是谁", a: "admin" }] },
    ]
}

// 建立api接口
Mock.mock('/api/login', 'post', function (options) {
    let body = JSON.parse(options.body);
    let userIndex = loginData.users.findIndex(item => item.username === body.username && item.password === body.password);
    console.log(userIndex);
    if (userIndex != -1) {
        loginData.users[userIndex]["cookie"] = Mock.Random.guid();
    }
    let response = {
        code: userIndex != -1 ? 200 : 401,
        msg: userIndex != -1 ? "登录成功" : "登录失败",
        token: userIndex != -1 ? loginData.users[userIndex]["cookie"] : "",
    }
    return response;
});
