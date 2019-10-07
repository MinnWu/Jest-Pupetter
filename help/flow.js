const { getAccount, delay, waitToClick, waitToInput, openBrowser, closeBrowser, waitForElement } = require('./base')

/**
 * Login
 * @param {*} User 传入要登录的用户
 */
const Login = async (User) => {
    console.log('Open Browser and redirect to Login page')
    await openBrowser(User)
    await delay(2)
    console.log('Input Username')
    await waitToInput('#login-username', getAccount(User).username)
    console.log('Input Password')
    await waitToInput('#login-password', getAccount(User).password)
    console.log('Click Login button')
    await waitToClick('#login > div.wrapper > a')
    await delay(3)
}

/**
 * Logout
 */
const Logout = async () => {
    console.log('Click Logged')
    await waitToClick('#header-options > a')
    console.log('Click Logout')
    await waitToClick('#header-options > ul > li > a')
}

/**
 * 导航栏选择
 * @param {*} First 一级菜单
 * @param {*} Second 二级菜单
 */
const clickNavigation = async (First, Second) => {
    switch (First) {
        case 'Data Entry':
            console.log('Click', First)
            await waitToClick('.source.active a')
            break
        case 'Validation':
            console.log('Click', First)
            await waitToClick('.approval a')
            break
        case 'Screening':
            console.log('Click', First)
            await waitToClick('.screening a')
            break
        case 'Compliance Review':
            console.log('Click', First)
            await waitToClick('.compliance a')
            break
        case 'History':
            console.log('Click', First)
            await waitToClick('.history a')
            break
        case 'Check-In Records':
            console.log('Click', First)
            await waitToClick('.checkinSummary a')
            break
        case 'Enquiry':
            console.log('Click', First)
            await waitToClick('.enquiry a')
            break
        case 'Search':
            console.log('Click', First)
            await waitToClick('.search a')
            break
        case 'Personal Info':
            console.log('Click', First)
            await waitToClick('.personalInfo a')
            break
        case 'A/C Recovery':
            console.log('Click', First)
            await waitToClick('.acRecovery a')
            break
        case 'Compliance Search':
            console.log('Click', First)
            await waitToClick('.personalInfo a')
            break
    }
    switch (Second) {
        case 'VIP ID':
            console.log('Click', Second)
            await waitToClick('#sourceList-vipId')
            break
        case 'SVIP MAIN ID':
            console.log('Click', Second)
            await waitToClick('#sourceList-svipId')
            break
        case 'SVIP Alt ID':
            console.log('Click', Second)
            await waitToClick('#sourceList-svipAltId')
            break
        case 'Credit Card':
            console.log('Click', Second)
            await waitToClick('#sourceList-creditCard')
            break
        case 'Bank Statement':
            console.log('Click', Second)
            await waitToClick('#sourceList-bank')
            break
        case 'Add Proof':
            console.log('Click', Second)
            await waitToClick('#sourceList-addr')
            break
    }
    await delay(3)
}

/**
 * 列表数据操作模块
 */
const dataHandle = async () => {
    console.log('Click Submit Date Time')
    await waitToClick('#CREATE_DATETIME')
    console.log('Click Details')
    await waitToClick('.tools a')
}

module.exports = {
    Login,
    Logout,
    clickNavigation,
    dataHandle,
}