import React from "react";
import TableList from '../../components/formcomp/TableList'
import { Icon, Button } from 'antd';
import { Link, withRouter } from "react-router-dom";

const ListLocation = (props) => {

    const columns = ['Id', 'Nome', 'Lat', 'Long', 'Categoria', 'Ativa', ''];

    return (
        <div>
            <div className="titleForm">
                <Icon type="tags" />
                <strong>Listagem Locais</strong>
            </div>
            <div className="buttonAddContainer">
                <div>
                <Link to="/home/location/create">
                        <Button icon="plus" type="primary" />
                    </Link>
                </div>
            </div>
            <div>
                <TableList endpoint={'location'} columns={columns} />
            </div>
        </div>
    )
}
export default withRouter(ListLocation);