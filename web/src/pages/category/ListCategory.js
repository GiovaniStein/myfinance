import React from "react";
import TableList from '../../components/formcomp/TableList';
import { Input, Icon, Button } from 'antd';
import { Link, withRouter } from "react-router-dom";


const ListCategory = (props) => {

    const columns = ['Id', 'Nome', 'Icone', 'Ativo', ''];

    return (
        <div>
            <div className="titleForm">
                <Icon type="tags" />
                <strong>Listagem de Categorias</strong>
            </div>
            <div className="buttonAddContainer">
                <div>
                    <Link to="/home/category/create">
                        <Button icon="plus" type="primary" />
                    </Link>
                </div>
            </div>
            <div>
                <TableList endpoint={'category'} columns={columns}/>
            </div>
        </div>
    )
}
export default withRouter(ListCategory);