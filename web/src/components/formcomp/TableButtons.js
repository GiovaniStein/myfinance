import React from "react";
import { Button } from 'antd';
import './TableButtons.css';
import { Link, withRouter } from "react-router-dom";
import Api from '../../service/Api';
import Alert from '../alert/Alert';

const TableButtons = ({ editObject = {}, endpoint = '', updateTable = () => { }, ...props }) => {

    const deleteRow = async () => {
        await Api.CrudApi.delete(endpoint, editObject.id);
        updateTable();
    }

    const disableFunction = (e) => {
        Alert.showDeleteConfirm('registro', deleteRow);
    }


    const toLink = {
        pathname: `/home/${endpoint}/create`,
        editObject: editObject
    };

    return (
        <div className="tableButtonsContainer">
            <Link to={toLink}>
                <Button type="default" className="buttonEdit" icon="edit" size="small" />
            </Link>
            <Button type="default" onClick={disableFunction} className="button-danger" icon="delete" size="small" />
        </div>
    )
}

export default withRouter(TableButtons);