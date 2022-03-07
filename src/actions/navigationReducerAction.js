export const USER_NAV = 'USER_NAV'
export const COMPANY_NAV = 'COMPANY_NAV'
export const SHOW_SIGN_IN = 'SHOW_SIGN_IN'
export const SHOW_SIGN_UP = 'SHOW_SIGN_UP'


export function setUserNav (){
    return {
        type: USER_NAV
    }
}

export function setCompanyNav (){
    return {
        type: COMPANY_NAV
    }
}

export function showSignInCompany (){
    return {
        type: SHOW_SIGN_IN
    }
}

export function showSignUpCompany (){
    return {
        type: SHOW_SIGN_UP
    }
}