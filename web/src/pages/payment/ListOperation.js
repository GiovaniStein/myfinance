import React, { Component, useState, useEffect } from "react";
import TableList from '../../components/formcomp/TableList'
import { Input, Icon, Button } from 'antd';
import TableButtons from '../../components/formcomp/TableButtons';
import { Link, withRouter } from "react-router-dom";


const OperationList = (props) => {

   

    const columns = ['Id', 'Description', 'Data', 'Valor', 'Categoria'];

   

    return (

        <div>
            <div className="titleForm">
                <Icon type="tags" />
                <strong>Listagem Operações</strong>
            </div>
            <div className="buttonAddContainer">
                <div>
                <Link to="/home/operation/create">
                        <Button icon="plus" type="primary" />
                    </Link>
                </div>
            </div>
            <div>
                <TableList endpoint={'operation'} columns={columns} />
            </div>
        </div>
    )
}
export default withRouter(OperationList);