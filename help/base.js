const config = require('./config')

/**
 * 获取URL信息
 * @param {*} Target 传一个与config.js文件对应的URL
 */
const getUrl = (Target) => {
    return config.Url[Target]
}

/**
 * 获取用户信息
 * @param {*} User 传一个与config.js文件对应的账号名
 */
const getAccount = (User) => {
    // if (!User) throw new Error('用户角色不正确，请重新输入！')
    return config.Account[User]
}

/**
 * 设置等待时间
 * @param {*} t 单位是秒，默认等待1秒
 */
const delay = async (t = 1) => {
    t = t * 1000
    await page.waitFor(t)
}

/**
 * 等待元素出现后再模拟鼠标点出该元素
 * @param {*} Target 元素选择器
 */
const waitToClick = async (Target) => {
    await delay()
    await page.waitForSelector(Target)
    await page.click(Target)
}

/**
 * 等待输入框元素出现后再输入信息
 * @param {*} Target 元素选择器
 * @param {*} Text 要输入的信息
 */
const waitToInput = async (Target, Text) => {
    await delay()
    await page.waitForSelector(Target)
    await page.type(Target, Text)
}

const openBrowser = async (Target) => {
    await page.goto(getUrl(Target).Url)
}

const closeBrowser = async () => {
    await page.close()
}

const screenshot = async () => {
    await page.screenshot({ path: './image/screenshot.png' })
}

/**
 * 等待元素,在某个时间内获取元素，每秒都在页面查看是否获取到该元素，获取到就返回True，否则返回False
 * @param {*} Element 元素选择器
 * @param {*} Time 等待时间
 */
const waitForElement = async (Element, Time = 5) => {
    // var number = Time * 4   //思路：用For循环，每250毫秒查看一下页面有没有Element，1S = 4 * 250MS,所以number = Time * 4
    // for (let i = 0; i <= number; i++) {
    //     await page.waitFor(250);
    //     if (await page.$(Element)) {
    //         return true
    //     }
    // }
    // return false
    Time = Time * 1000
    try {
        await page.waitForSelector(Element, { timeout: Time })
        return true
    }
    catch (Error) {
        return false
    }
}

module.exports = {
    getUrl,
    getAccount,
    delay,
    waitToClick,
    waitToInput,
    openBrowser,
    closeBrowser,
    screenshot,
    waitForElement,
}