import _ from 'lodash';
import {isValidHttpUrl, isValidImgUrl} from "../utils/misc";

export default function KvList({value}) {
    const ListValue = ({v}) => {
        if (_.isObject(v)) {
            return <KvList value={v}/>;
        }
        if (_.isArray(v)) {
            return <KvList value={v}/>;
        }
        if (isValidHttpUrl(v)) {
            let linkContent = v;
            if (isValidImgUrl(v)) {
                linkContent = <img alt={v} src={v} style={{maxHeight: '100px'}}/>
            }
            return <a target='_blank' href={v}>{linkContent}</a>;
        }
        return v; // TextNode
    }
    const ListItem = ({k, v}) => <li>{k && <b>{_.capitalize(k)}: </b>}<ListValue v={v}/></li>;

    if (_.isArray(value)) {
        return <ol>{value.map((v, index) => <ListItem key={index} v={v}/>)}</ol>;
    }
    return <ul>{_.entries(value).map(([k, v]) => <ListItem key={k} k={k} v={v}/>)}</ul>;
}