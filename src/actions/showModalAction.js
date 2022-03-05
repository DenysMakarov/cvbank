
export const SHOW_MODAL_SIGN_IN = 'SHOW_MODAL_SIGN_IN'
export const HIDE_MODAL_SIGN_IN = 'HIDE_MODAL_SIGN_IN'
export const SHOW_MODAL_SIGN_UP = 'SHOW_MODAL_SIGN_UP'
export const HIDE_MODAL_SIGN_UP = 'HIDE_MODAL_SIGN_UP'



export function showSignIn() {
    return {
        type: SHOW_MODAL_SIGN_IN
    }
}

export function hideSignIn() {
    return {
        type: HIDE_MODAL_SIGN_IN
    }
}

export function showSignUp() {
    return {
        type: SHOW_MODAL_SIGN_UP
    }
}

export function hideSignInUp() {
    return {
        type: HIDE_MODAL_SIGN_UP
    }
}
