import {SxProps} from "@mui/joy/styles/types";
import {HomeIntent, HomeValue, MainState, SideButton} from "../models/ui/MainUiModel.ts";
import {useImmer} from "use-immer";
import {useNavigate} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Home, Logout, LogoutOutlined, MailOutline, SavedSearch, SearchOutlined} from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import {useEffect} from "react";

export const useMainViewModel = (): HomeIntent => {
    const homeState: MainState = {
        checkId: 0,
        search: ""
    }
    const [state, setState] = useImmer(homeState)
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/contacts/0")
    }, [navigate])
    return {
        ...state,
        onClickUser(btn: SideButton): void {
            setState(draft => {
                draft.checkId = btn.id
            })
            navigate(btn.router)
        }
    }
}



export const btnList: SideButton[] = [
    {id: 0, name: "Home", uncheckIcon: HomeOutlinedIcon, checkIcon: Home, router: `/contacts/0`},
    {id: 1, name: "Search", uncheckIcon: SearchOutlined, checkIcon: SavedSearch, router: `/contacts/1`},
    {id: 2, name: "Messages", uncheckIcon: MailOutline, checkIcon: MailIcon, router: `/contacts/2`},
    {id: 3, name: "Logout", uncheckIcon: LogoutOutlined, checkIcon: Logout, router: `/login`}
]

export const uiValue: { [key in HomeValue]: SxProps } = {
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
    }
}