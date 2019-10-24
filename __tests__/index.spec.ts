import { myAdd } from '../src/index'

describe("表达式", () => {
    test("测试两数相加", () => {
        expect(myAdd(1,3)).toBe(4)
    })
})