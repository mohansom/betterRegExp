import BetterRegExp from '../src/index'

describe("正则表达式", () => {
    test("测试18897960357是手机号码", () => {
        const BRE = new BetterRegExp()
        expect(BRE.isPhoneNumber(18897960357)).toBeTruthy()
    })

    test("测试14897560357是手机号码", () => {
        const BRE = new BetterRegExp()
        expect(BRE.isPhoneNumber(14897560357)).toBeTruthy()
    })

    test("测试12897560357不是手机号码", () => {
        const BRE = new BetterRegExp()
        expect(BRE.isPhoneNumber(12897560357)).toBeFalsy()
    })

    test("测试177897560357不是手机号码", () => {
        const BRE = new BetterRegExp()
        expect(BRE.isPhoneNumber(177897560357)).toBeFalsy()
    })
})
