export type LoginState = {
    username: string
    pwd: string
    isShowPwd: boolean
    remember: boolean
    loading: boolean
    showAlert: boolean
}

export type LoginEvent = {
    onChangeUsername: (username: string) => void,
    onChangePassword: (password: string) => void,
    onSwitchShowPwd: () => void,
    onSwitchRemember: () => void,
    onClickLogin: () => void,
    onClickForgot: () => void
}

export type LoginValue = "title" | "input" | "login" | "remember" | "card" | "forgot"

export type LoginIntent = LoginEvent & LoginState