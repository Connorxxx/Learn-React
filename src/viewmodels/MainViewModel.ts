import {SxProps} from "@mui/joy/styles/types";
import {HomeIntent, HomeValue, MainState, SideButton} from "../models/intent/MainIntent.ts";
import {useImmer} from "use-immer";
import {useNavigate} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Home, Logout, LogoutOutlined, MailOutline, SavedSearch, SearchOutlined} from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import {useEffect} from "react";

export const useMainViewModel = (): HomeIntent => {
    const mainState: MainState = {
        checkId: 0,
        search: "",
        openModal: false
    }
    const [state, setState] = useImmer(mainState)
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/home")
    }, [navigate])
    return {
        ...state,
        onClickUser(btn: SideButton) {
            if (btn.id != 3) {
                setState(draft => {
                    draft.checkId = btn.id
                })
                navigate(btn.router)
            } else {
                setState(draft => {
                    draft.openModal = true
                })
            }
        },
        onClose() {
            setState(draft => {
                draft.openModal = false
            })
        },
        onLogout() {
            navigate("/login")
        }
    }
}

export const btnList: SideButton[] = [
    {id: 0, name: "Home", uncheckIcon: HomeOutlinedIcon, checkIcon: Home, router: `/home`},
    {id: 1, name: "Search", uncheckIcon: SearchOutlined, checkIcon: SavedSearch, router: `/contacts/1`},
    {id: 2, name: "Messages", uncheckIcon: MailOutline, checkIcon: MailIcon, router: `/contacts/2`},
    {id: 3, name: "Logout", uncheckIcon: LogoutOutlined, checkIcon: Logout, router: `/login`}
]

export const uiValue: Record<HomeValue, SxProps> = {
    search: {
        '--Input-focusedInset': 'var',
        '&:focus-within': {
            borderColor: 'black',
        },
        borderRadius: "4rem",
        minHeight: "3rem"
    },
    btnHome: {
        borderRadius: "4rem",
        marginTop: "1.5rem",
        color: "black",
    },
    logout: {
        marginTop: "2rem",
        borderRadius: "4rem",
        backgroundColor: "black",
        width: "95%",
        '&:hover': {
            backgroundColor: "#1c1c1c",
        }
    },
    cancel: {
        marginTop: "1rem",
        borderRadius: "4rem",
        width: "95%",
        color: 'black',
        backgroundColor: "white",
        borderColor: "black",
        '&:hover': {
            backgroundColor: "#f8f8f8",
        }
    }
}