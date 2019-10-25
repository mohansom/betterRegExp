
export default class BetterRegExp{

    public phoneReg : RegExp = /^1[3456789]\d{9}\b/

    // 允许英文字母、数字、下划线、英文句号、以及中划线组成
    public emainReg : RegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)$/

    constructor(){ 

    }

    isPhone (inputNum:number) : Boolean{
        if(this.phoneReg.test(inputNum.toString())){
            return true
        }
        return false
    }

    isEmail (inputStr:any) : Boolean{
        if(this.emainReg.test(inputStr.toString())){
            return true
        }
        return false
    }
}