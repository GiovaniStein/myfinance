import React from "react";
import {Button} from 'antd';
import './TableButtons.css';

const TableButtons = ({objectId, ...props}) => {

    const editFunction = (e) => {
        console.log(objectId);
    }

    const disableFunction = (e) => {
        console.log(objectId);
    }

    return (
        <div className="tableButtonsContainer">
            <Button type="default" onClick={editFunction} className="buttonEdit" icon="edit" size="small" />
            <Button type="default" onClick={disableFunction} className="button-danger" icon="delete" size="small"/>
        </div>
    )
}

export default TableButtons;