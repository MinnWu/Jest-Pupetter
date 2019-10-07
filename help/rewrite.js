const { Login, Logout } = require('./flow')

/**
 * 定义一个立即执行函数来重写describe，it函数,把一些before操作放在describe运行前执行。
 * 设置Jest的Timeout时间
 */
const handler = (() => {
    return {
        /**
         * 重写describe函数,让describe可以接收多个参数，
         * 然后我们再根据实际情况对这些参数进行相关业务处理
         */
        async describe(...args) {
            jest.setTimeout(10000)
            //判断：如果接收到的是一个string类型的账号名，就先做登录操作，否则直接运行describe
            if (typeof args[1] === 'string' ? args[1] : false) {
                beforeAll(async () => {
                    await Login(args[1])
                })
                afterAll(async () => {
                    await Logout()
                })

                //调回原来的describe函数，但是由于多了一个参数，所以我们在调用这个函数这时候，要传入第一和第三个参数
                return describe(args[0], args[2])
            }
            //调回原来的describe函数
            return describe(...args)
        },
        async it(...args) {
            try {
                jest.setTimeout(10000)
                return it(...args)

            } catch (error) {
                await page.screenshot({ path: './image/screenshot.png' })
            }
        }
    }
})()

module.exports = {
    describe: handler.describe,
    it: handler.it
}