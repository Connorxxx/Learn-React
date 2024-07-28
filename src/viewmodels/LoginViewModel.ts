import {useImmer} from "use-immer";
import {LoginIntent, LoginState, LoginValue} from "../models/intent/LoginIntent.ts";
import {SxProps} from "@mui/joy/styles/types";
import {css} from "@emotion/react";
import {useNavigate} from "react-router-dom";
import {delay} from "../utils/Utils.ts";

export const useLoginViewModel = (): LoginIntent => {
    const loginState: LoginState = {
        showAlert: false,
        isShowPwd: false,
        pwd: "",
        remember: false,
        username: "",
        loading: false
    };
    const [state, setState] = useImmer(loginState)
    const navigate = useNavigate()
    return {
        ...state,
        onChangeUsername: (username: string) => setState(draft => {
            draft.username = username
        }),
        onChangePassword: (password: string) => setState(draft => {
            draft.pwd = password
        }),
        onSwitchShowPwd: () => setState(draft => {
            draft.isShowPwd = !draft.isShowPwd
        }),
        onSwitchRemember: () => setState(draft => {
            draft.remember = !draft.remember
        }),
        onClickLogin: async () => {
            if (state.username.isEmpty() || state.pwd.isEmpty()) {
                setState(draft => {
                    draft.showAlert = true
                })
                return
            }
            setState(draft => {
                draft.loading = true
                draft.showAlert = false
            })
            await delay(2000)
            if (state.username != "admin" && state.pwd != "admin") {
                setState(draft => {
                    draft.loading = false
                    draft.showAlert = true
                })
                return
            }
            navigate("/")
        },
        onClickForgot: () => {
        }
    }
}

const style = css`
    width: 300px;
    height: 300px;
    background-color: hotpink;

    &:hover {
        background-color: darkorchid;
    }
`;

export const uiValue: { [key in LoginValue]: SxProps } = {
    card: {
        width: '35%',
        minWidth: "20rem",
        borderRadius: "2rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '3rem',
    },
    login: {
        borderRadius: "4rem",
        marginTop: "25px",
        width: "68%",
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#1c1c1c",
        }
    },
    input: {
        marginTop: "5px",
        '--Input-focusedInset': 'var',
        '&:focus-within': {
            borderColor: 'black',
        },
    },
    remember: {
        marginTop: "15px"
    },
    title: {color: "black", padding: "1rem", width: "100%", textAlign: "center"},
    forgot: {
        color: "black",
        "&:hover": {
            textDecorationColor: "black"
        }
    }
}

const createFun = <T>(t: T) => () => t

const fu = (s: string) => () => {
    console.log(s)
}

const redo = () => {
    let i = 0
    return () => {
        i++
        console.log(i)
    }
}

const test = fu("s")

const curring = (a: string, b: string) => (c: number) => {
    a.includes(c.toString())
    b.length
}

const doCurring = curring("1", "2")
doCurring(1)
doCurring(2)

const createFilter = <T>(predicate: (t: T) => boolean) => (arr: T[]) => arr.filter(it => predicate(it))

const evenFilter = createFilter<number>(it => it % 2 === 0)
const list = [1,2,3,4,5]
evenFilter(list)
