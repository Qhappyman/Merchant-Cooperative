const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        title: '商品审核',
        key: '/public',
        icon: 'appstore',
        auth: [1],
        subs: [{ title: '申请列表', key: '/public/display', icon: '' }]
    },
    {
        title: '商家信息',
        key: '/form',
        icon: 'form',
        subs: [
            { title: '商家列表', key: '/form/base-form', icon: '' },
            { title: '商家信息', key: '/form/modify', icon: '' }
        ]
    },
    {
        title: '商品管理',
        key: '/show',
        icon: 'pie-chart',
        subs: [
            { title: '商品列表', key: '/show/table', icon: '' },
            { title: '修改商品', key: '/show/upload', icon: '' }
        ]
    },
    {
        title: '其它',
        key: '/others',
        icon: 'paper-clip',
        subs: [
            { title: '404', key: '/404', icon: '' },
            { title: '500', key: '/500', icon: '' }
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'user',
        auth: [1]
    }
]

export default menu
