module.exports = {
    title: '前端技术文档',
    description: '说明文档',
    base: '/front-end/',
    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js',
                // "@": path.join(__dirname)
            },
        },
    },
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: `/logo.png`,
            },
        ],
    ],
    theme: 'reco',
    themeConfig: {
        repo: 'https://github.com/zwf193071/front-end',
        repoLabel: 'My Blog',
        nav: [
            {text: '主页', link: '/'},
            {
                text: '前端技术',
                link: '/algorithm/',
                items: [
                    {text: '算法', link: '/algorithm/stock'},
                    // {text: 'Cesium', link: '/JS/Cesium'},
                    // {text: '前端代码规范', link: '/JS/CodeStandards'},
                    // {text: 'vscode插件推荐', link: '/JS/VSCodePlugins'},
                ],
            }
        ],
        sidebar: {
            '/algorithm/': [
                {
                    title: '前端技术',
                    collapsable: false,
                    children: [
                        'stock'
                    ]
                },
            ]
        },
        // 内置搜索
        search: true,
        searchMaxSuggestions: 10,
        // 最后更新时间
        lastUpdated: '最后更新时间', // string | boolean
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        /**
         * support for
         * 'default'
         * 'funky'
         * 'okaidia'
         * 'solarizedlight'
         * 'tomorrow'
         */
        codeTheme: 'tomorrow', // default 'tomorrow'
        subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    },
    plugins: [['@vuepress/back-to-top', true],

    ]
}
