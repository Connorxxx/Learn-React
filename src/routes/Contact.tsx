import {Button} from "@mui/joy";
import {useParams} from "react-router-dom";

export const Contact = () => {
    const { contactId } = useParams()
    return <Button>{`Button ${contactId}`}</Button>
}