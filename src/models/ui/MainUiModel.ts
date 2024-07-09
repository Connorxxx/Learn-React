import {SvgIconComponent} from "@mui/icons-material";

export type MainState = {
    search: string
    checkId: number
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
}

export type HomeIntent = HomeEvent & MainState

export type HomeValue = "search" | "btnHome"