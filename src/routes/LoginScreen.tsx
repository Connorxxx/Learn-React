import {uiValue, useLoginViewModel} from "../viewModels/LoginViewModel.ts";
import {Alert, Box, Button, Card, Checkbox, FormLabel, Input, Link, Stack, Typography} from "@mui/joy";
import {Error, Visibility, VisibilityOff} from "@mui/icons-material";
import React from "react";
import {SxProps} from "@mui/joy/styles/types";

export const LoginScreen = () => {
    const vm = useLoginViewModel()
    return (
        <Stack direction="column" alignItems="center" justifyContent="center" width="98vw" height="98vh">
            <Card variant="outlined" color="neutral" sx={uiValue.card}>
                <ErrorAlert showAlert={vm.showAlert}/>
                <Typography overflow="clip" noWrap={true} level="h1" sx={uiValue.title}>Welcome to React</Typography>
                <Box width="70%">
                    <TextLabelInput text={vm.username}
                                    label="Email or username"
                                    onchange={vm.onChangeUsername}
                                    modifier={uiValue.input}/>
                    <PwdLabelInput modifier={uiValue.input}
                                   label="Password"
                                   text={vm.pwd}
                                   isShow={vm.isShowPwd}
                                   onchange={vm.onChangePassword}
                                   checkShow={vm.onSwitchShowPwd}/>
                    <Checkbox onChange={vm.onSwitchRemember}
                              checked={vm.remember}
                              label="Remember me"
                              size="sm"
                              color="neutral"
                              variant="outlined"
                              sx={uiValue.remember}/>
                </Box>
                <Box display='flex' flexDirection="column" alignItems='center' width='100%'>
                    <Button sx={uiValue.login}
                            size="lg"
                            variant="solid"
                            onClick={vm.onClickLogin}
                            loading={vm.loading}>
                        Login</Button>
                    <Link marginTop="14px" sx={uiValue.forgot}>Forgot Password?</Link>
                </Box>
            </Card>
        </Stack>
    )
}

const ErrorAlert = (props: { showAlert: boolean }) => (props.showAlert && <Alert
    sx={{width: "80%", marginTop: "1rem"}}
    variant="solid"
    color="danger"
    startDecorator={<Error/>}>
    Incorrect username or password.
</Alert>)


const TextLabelInput = (props: {
    modifier: SxProps,
    label: string,
    text: string,
    onchange: (s: string) => void
}) => <Box marginTop="20px">
        <FormLabel>{props.label}</FormLabel>
        <Input
            type="text"
            size="lg"
            value={props.text}
            placeholder={props.label}
            variant="outlined"
            sx={props.modifier}
            onChange={event => props.onchange(event.target.value)}
        />
    </Box>

const PwdLabelInput = (props: {
    modifier: SxProps,
    label: string
    text: string,
    isShow: boolean,
    onchange: (s: string) => void,
    checkShow: () => void
}) => <Box marginTop="20px">
        <FormLabel>{props.label}</FormLabel>
        <Input
            type={props.isShow ? "text" : "password"}
            size="lg"
            value={props.text}
            placeholder={props.label}
            variant="outlined" sx={props.modifier}
            endDecorator={
                <Box display="flex" justifyContent="center" onClick={props.checkShow}>
                    {props.isShow ? <Visibility/> : <VisibilityOff/>}
                </Box>}
            onChange={event => props.onchange(event.target.value)}
        />
    </Box>
