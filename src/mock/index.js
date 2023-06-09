import Mock from 'mockjs';

// 登录
const loginData = {
    users: [
        { username: "admin", password: "123456", questions: [{ q: "你是谁", a: "admin" }] },
    ]
}
Mock.mock('/api/login', 'post', function (options) {
    let body = JSON.parse(options.body);
    let userIndex = loginData.users.findIndex(item => item.username === body.username && item.password === body.password);
    console.log(userIndex);
    if (userIndex != -1) {
        loginData.users[userIndex]["cookie"] = Mock.Random.guid();
    }
    const response = {
        code: userIndex != -1 ? 200 : 401,
        msg: userIndex != -1 ? "登录成功" : "登录失败",
        token: userIndex != -1 ? loginData.users[userIndex]["cookie"] : "",
    }
    return response;
});


// 商品
const goodsData = Mock.mock({
    "goodsList|1-20": [
        { "id|+1": 1, "title": "@ctitle", "introduction": "@cparagraph" },
    ]
})

Mock.mock('/api/getGoodsList', 'get', function (options) {
    console.log(options);
    const response = {
        code: 200,
        data: goodsData
    }
    return response;
})