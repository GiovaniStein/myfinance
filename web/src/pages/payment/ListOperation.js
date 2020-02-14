import React, { Component, useState, useEffect } from "react";
import TableList from '../../components/formcomp/TableList'
import { Input, Icon, Button } from 'antd';
import TableButtons from '../../components/formcomp/TableButtons';
import { Link, withRouter } from "react-router-dom";


const OperationList = (props) => {

    const data = [
        {
            id: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            id: '2',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            id: '3',
            name: 'Jim Green',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            id: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ];

    const columns = ['Id', 'Name', 'Age', 'Address', 'Actions'];

    const createRows = () => {
        return data.map((column, index) => {
            const { id, name, age, address } = column
            return (
                <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{address}</td>
                    <td><TableButtons objectId={id} /></td>
                </tr>
            )
        })
    }

    return (

        <div>
            <div className="titleForm">
                <Icon type="tags" />
                <strong>Listagem Operações</strong>
            </div>
            <div className="listSearchContainer">
                <Input className="searchField" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                <div>
                    <Button icon="search" type="primary">
                        Pesquisar
                    </Button>
                </div>
                <div>
                    <Link to="/home/operation/create">
                        <Button icon="plus" type="primary" />
                    </Link>
                </div>
            </div>
            <div>
                <TableList columns={columns} dataRows={createRows} />
            </div>
        </div>
    )
}
export default withRouter(OperationList);