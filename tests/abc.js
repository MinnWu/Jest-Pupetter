const { sum } = require('../help/common')

// function test() {
//     var arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[i] = function () { console.log(i) }
//     }
//     return arr
// }

// var myarr = test()
// for (let j = 0; j < 10; j++) {
//     myarr[j]()
// }

// function a() {
//     var num = 100
//     var b = function () {
//         num++
//         console.log(num)
//     }
//     return b
// }
// var demo = a()
// demo()
// demo()

// const test = (a) => {
//     // if (typeof args[0] === 'string' ? args[0] : false) {
//     // if (args) {
//     //     console.log(args)
//     // }
//     return test(function (a) { console.log('aaaaaa') })
//     // return test(args[0], function () { console.log(args[0]) })
// }


// function aa(...args) {
//     console.log(args[1])
//     // function aa(a, b) {
//     //     return a + b
//     // }
//     return function (...args) {
//         fn()
//     }
// }

// const test = (() => {
//     return {
//         describe(...args) {
//             if (typeof args[1] === 'string' ? args[1] : false) { console.log(args[1]) }
//             return describe(...args)
//         }
//     }
// })()



// test.describe(1, 'qqq', 2)




function aa() {
    console.log('I am aa')
}

function test(fn) {
    function bb() {
        console.log('start...')
        fn(x)
        console.log('End...')
    }
    return bb
}

aa = test(aa);

function test(fn) {
    console.log('start...')
    fn()
    console.log('End...')
    return fn
}

aa = test(aa);
aa()