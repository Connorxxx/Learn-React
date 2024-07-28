import {Box, ListItem, Stack, Typography} from "@mui/joy";
import {useHomeViewModel} from "../viewmodels/HomeViewModel.ts";
import {List} from "immutable";
import {UiPhoto} from "../models/uimodels/UiPhoto.ts";

export const HomeScreen = () => {
    const vm = useHomeViewModel()
    return <Stack overflow="scroll" width="100%" height="100%">
        <ul>
            <Photos list={vm.photos}/>
        </ul>
    </Stack>
}

const User = (props: {photo: UiPhoto}) =>
    <Stack direction="row" height="64px" alignItems="center">
    <img src={props.photo.profile_image} alt={props.photo.name} loading="lazy"/>
        <Stack direction="column" height="100%">
            <Stack flex="1" direction="row" alignItems="center" marginTop=".4rem">
                <Typography level="h4" marginLeft="1rem">{props.photo.name}</Typography>
                <Typography level="body-xs" marginTop=".3rem" marginLeft=".3rem">@{props.photo.username}</Typography>
            </Stack>
            <Stack>
                <Typography level="body-lg" marginLeft="1rem" marginBottom=".4rem" alignItems="center" >{props.photo.description}</Typography>
            </Stack>
        </Stack>
</Stack>


const Photos = (props: { list: List<UiPhoto> }) => props.list.map(photo =>
    <ListItem key={photo.id} >
        <Stack direction="column" height="100%" marginBottom="2rem">
            <User photo={photo}/>
            <Box height="55%">
                <img src={photo.url}
                     alt={photo.description}
                     loading="lazy"
                />
            </Box>
        </Stack>
    </ListItem>)



