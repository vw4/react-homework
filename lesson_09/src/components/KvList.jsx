import _ from 'lodash';
import {isValidHttpUrl, isValidImgUrl} from "../utils/misc";

export default function KvList({value}) {
    const ListItem = ({k, v}) => {
        let itemValue = v;
        if (_.isObject(v)) {
            itemValue = <KvList value={v}/>
        }
        if (_.isArray(v)) {
            itemValue = <KvList value={v}/>
        }
        if (isValidHttpUrl(v)) {
            let linkContent = v;
            if (isValidImgUrl(v)) {
                linkContent = <img alt={v} src={v} style={{maxHeight: '100px'}}/>
            }
            itemValue = <a href={v}>{linkContent}</a>
        }

        return <li>{k && <b>{_.capitalize(k)}: </b>}{itemValue}</li>
    }
    if (_.isArray(value)) {
        return <ol>{value.map((v, index) => <ListItem key={index} v={v}/>)}</ol>
    }
    return <ul>{_.entries(value).map(([k, v]) => <ListItem key={k} k={k} v={v}/>)}</ul>
}