import * as React from "react";
import {Button, Card, Modal, Stack, Typography} from "@mui/joy";
import {btnList, uiValue, useMainViewModel} from "../viewmodels/MainViewModel.ts";
import {Outlet} from "react-router-dom";
import {GitHub} from "@mui/icons-material";
import {SideButton} from "../models/intent/MainIntent.ts";

export const MainScreen = () => {
    const vm = useMainViewModel()
    return <Stack direction="row" width="100vw" height="100vh">
        <LogoutModal open={vm.openModal} onClose={vm.onClose} onLogout={vm.onLogout}/>
        <Stack direction="column" width="20%" height="100%" alignItems={"center"} sx={{backgroundColor: "#f7f7f7"}}>
            <SideBar content={() => <MainButton onClick={vm.onClickUser} checkId={vm.checkId}/>}/>
        </Stack>
        <Stack direction="column" width="80%" height="100%" sx={{backgroundColor: "white"}}>
            <Outlet/>
        </Stack>
    </Stack>
}

const SideBar = (props: { content: () => React.ReactNode }) =>
    <Stack marginTop="1.5rem" width={"85%"} height="100%" alignItems="center">
        <GitHub fontSize={"large"}/>
        <Stack direction="column" marginTop="1rem" height="100%" alignItems="start">
            <props.content/>
        </Stack>
        <Typography level="body-xs" fontWeight={"initial"} sx={{marginTop: "auto", marginBottom: "2rem"}}>Powered by
            React</Typography>
    </Stack>

const MainButton = (props: { onClick: (btn: SideButton) => void, checkId: number }) => btnList.map(it =>
    <Button
        variant="plain"
        size="lg"
        key={it.id}
        startDecorator={props.checkId === it.id ? <it.checkIcon/> : <it.uncheckIcon/>}
        onClick={() => props.onClick(it)}
        sx={uiValue.btnHome}>
        {it.name}
    </Button>
)

const LogoutModal = (props: { open: boolean, onClose: () => void, onLogout: () => void }) =>
    <Modal open={props.open}
           onClose={props.onClose}
           aria-labelledby="nested-modal-title"
           aria-describedby="nested-modal-description"
           sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Card variant="outlined" color="neutral" sx={{borderRadius: "1.6rem", padding: "3.5rem"}}>
            <Stack direction="column" alignItems="center">
                <GitHub fontSize={"large"}/>
                <Typography id="nested-modal-title" level="title-lg" fontSize="x-large" marginTop="1.2rem">
                    Log out of React?
                </Typography>
                <Typography id="nested-modal-description"
                            level="body-md"
                            fontWeight="lighter"
                            textColor="text.tertiary"
                            marginTop="1rem"
                            sx={{whiteSpace: 'pre-line'}}>{`You can always log back in at any time.
                If you just want to switch accounts,
                you can do that by adding an existing account.`}</Typography>
                <Button size="lg" onClick={props.onLogout} sx={uiValue.logout}>Log out</Button>
                <Button size="lg" variant="outlined" onClick={props.onClose} sx={uiValue.cancel}>Cancel</Button>
            </Stack>
        </Card>
    </Modal>

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


