export const USER_NAV = 'USER_NAV'
export const COMPANY_NAV = 'COMPANY_NAV'


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