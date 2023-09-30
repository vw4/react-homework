import {Alert, Collapse} from "react-bootstrap";
import {useState} from "react";

export function Notification({children, type = 'info'}) {
    const [show, setShow] = useState(true);
    return <Collapse in={show}>
        <div>
            <Alert variant={type} onClose={() => setShow(false)} dismissible>
                {children}
            </Alert>
        </div>
    </Collapse>;
}