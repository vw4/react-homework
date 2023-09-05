import {CircularProgress, IconButton} from "@mui/material";
import {useState} from "react";

export default function LoadingButton({label, onClick: onClickCallback, children}) {
    const [loading, setLoading] = useState(false);

    const onClick = (e) => {
        e.stopPropagation();
        setLoading(true);
        onClickCallback(onSuccess);
    }

    const onSuccess = () => {
        setLoading(false);
    }

    return <IconButton aria-label={label} onClick={onClick} disabled={loading}>
        {loading ? <CircularProgress size={24} color='inherit'/> : children}
    </IconButton>
}