import betterRegExp from '../src/index'

const bRE = new betterRegExp()
describe("正则表达式", () => {

    describe("测试手机号码", () => {
        test("18897962257是手机号码", () => {
            expect(bRE.isPhone(18897960357)).toBeTruthy()
        })
    
        test("14894560357是手机号码", () => {
            expect(bRE.isPhone(14897560357)).toBeTruthy()
        })
    
        test("12897569957不是手机号码", () => {
            expect(bRE.isPhone(12897569957)).toBeFalsy()
        })
    
        test("177897563357不是手机号码", () => {
            expect(bRE.isPhone(177897563357)).toBeFalsy()
        })

        test("1778973357不是手机号码", () => {
            expect(bRE.isPhone(1778973357)).toBeFalsy()
        })
    })

    describe("测试邮箱", () => {
        test("794333@qq.com是邮箱", () => {
            expect(bRE.isEmail("794333@qq.com")).toBeTruthy()
        })

        test("710578897@qq.com是邮箱", () => {
            expect(bRE.isEmail("710578897@qq.com")).toBeTruthy()
        })

        test("100578897@qq.com是邮箱", () => {
            expect(bRE.isEmail("100578897@qq.com")).toBeTruthy()
        })

        test("7105722337@163.com是邮箱", () => {
            expect(bRE.isEmail("7105722337@163.com")).toBeTruthy()
        })

        test("7105722337@163.com是邮箱", () => {
            expect(bRE.isEmail("7105722337@163.com")).toBeTruthy()
        })

        test("liu_jian_feng-196-12-14@gmail.com是邮箱", () => {
            expect(bRE.isEmail("liu_jian_feng-196-12-14@gmail.com")).toBeTruthy()
        })

        test("105*9989@gmail.com不是邮箱", () => {
            expect(bRE.isEmail("105*9989@gmail.com")).toBeFalsy()
        })
    })
})
