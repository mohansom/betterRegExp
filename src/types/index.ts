export interface BetterRegExpInstance{
    isPhoneNumber (inputStr:String) : Boolean
    isEmailNumber (inputStr:String) : Boolean
}

export interface BetterRegExpStaic{
    new () : BetterRegExpInstance
}