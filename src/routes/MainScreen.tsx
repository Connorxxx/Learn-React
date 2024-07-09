import * as React from "react";
import {Button, Stack, Typography} from "@mui/joy";
import {btnList, uiValue, useMainViewModel} from "../viewModels/MainViewModel.ts";
import {Outlet} from "react-router-dom";
import {GitHub} from "@mui/icons-material";
import {SideButton} from "../models/ui/MainUiModel.ts";

export const MainScreen = () => {
    const vm = useMainViewModel()
    return <Stack direction="row" width="100vw" height="100vh">
        <Stack direction="column" width="20%" height="100%" alignItems={"center"} sx={{backgroundColor: "#f7f7f7"}}>
            <SideBar onClick={vm.onClickUser} checkId={vm.checkId}/>
        </Stack>
        <Stack direction="column" width="80%" height="100%" sx={{backgroundColor: "white"}}>
            <Outlet/>
        </Stack>
    </Stack>
}

const SideBar = (props: { onClick: (btn: SideButton) => void, checkId: number }) =>
    <Stack marginTop="1.5rem" width={"85%"} height="100%" alignItems="center">
        <GitHub fontSize={"large"}/>
        <Stack direction="column" marginTop="1rem" height="100%" alignItems="start">
            <MainButton onClick={props.onClick} checkId={props.checkId}/>
        </Stack>
        <Typography level="body-xs" fontWeight={"initial"} sx={{marginTop: "auto", marginBottom: "2rem"}}>Powered by
            React</Typography>
    </Stack>

const MainButton = (props: { onClick: (btn: SideButton) => void, checkId: number }) => btnList.map(it => <Button
    variant="plain"
    size="lg"
    startDecorator={props.checkId === it.id ? <it.checkIcon/> : <it.uncheckIcon/>}
    onClick={() => props.onClick(it)}
    sx={uiValue.btnHome}>{it.name}</Button>)

// export const Test = () => (
//     <div className="flex flex-col items-center justify-center w-screen h-screen">
//
//         <Card className="w-1/3 rounded-3xl border-stone-400">
//             <h1 className="m-6 text-4xl font-bold text-center">
//                 Fuck World
//             </h1>
//         </Card>
//     </div>
// )


