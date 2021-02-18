/**
 * @file 技能树
 */

const root = {
    list: [
        {
            name: '计算机技术',
            en: 'computer-technology',
            list: [
                {
                    name: '前端',
                    list: [
                        {
                            name: 'TypeScript'
                        }
                    ]
                }
            ]
        },
        {
            name: '金融知识',
            en: 'financial-knowledge',
            list: [
                {
                    name: '术语',
                    list: [
                        {
                            name: '打新'
                        },
                        {
                            name: '出/入金'
                        }
                    ]
                },
                {
                    name: '港股',
                    list: [
                        {
                            name: '港股银行卡',
                            status: 'ing'
                        }
                    ]
                },
                {
                    name: 'APP',
                    list: [
                        {
                            name: '富途',
                            list: [
                                {
                                    name: '福利',
                                    list: [
                                        '新开户送 50 港币，一年港股、美股免佣',
                                        '百度中信、汇丰、民生港卡',
                                        '历史首次入金富途 2 万港币以上可得 300-1000 港币入金奖励'
                                    ]
                                }
                            ]
                        },
                        {
                            name: '老虎'
                        }
                    ]
                }
            ]
        }
    ]
}
