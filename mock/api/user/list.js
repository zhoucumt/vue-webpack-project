var data = {
    page: 1, // 当前页
    total: 10, // 总页数
    list: [
        {
            id: '1', // 编号
            name: '张无忌', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '2', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '3', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '4', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '5', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '6', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '7', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '8', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '9', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '10', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        },
        {
            id: '11', // 编号
            name: '张三丰', // 名称
            nickname: '张教主',
            phone: '12345678901'
        }
    ]
}

module.exports =  function (req) {
    data.page = +req.query.page || 1

    return {
        status: 0,
        data: data
    }
}
