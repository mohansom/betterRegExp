
export default class BetterRegExp{
    constructor(){ 

    }

    isPhoneNumber (inputStr:number) : Boolean{
        if(/^1[3456789]\d{9}\b/.test(inputStr.toString())){
            return true
        }
        return false
    }

    isEmailNumber (inputStr:String) : Boolean{
        return false
    }
}