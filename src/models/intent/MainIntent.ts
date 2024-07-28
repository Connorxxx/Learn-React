import {SvgIconComponent} from "@mui/icons-material";

export type MainState = {
    search: string
    checkId: number
    openModal: boolean
}

export type SideButton = {
    id: number
    name: string
    uncheckIcon: SvgIconComponent
    checkIcon: SvgIconComponent
    router: string
}

export type HomeEvent = {
    onClickUser: (btn: SideButton) => void
    onClose: () => void
    onLogout: () => void
}

export type HomeIntent = HomeEvent & MainState

export type HomeValue = "search" | "btnHome" | "logout" | "cancel"