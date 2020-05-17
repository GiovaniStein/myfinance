import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { DatePicker, Input, Select, Icon, Spin } from 'antd';
import SubmitContent from '../../components/formcomp/SubmitContent';
import Api from '../../service/Api';

const { Option } = Select;

const CreateOperation = (props) => {

    const [operationDescription, setOperationDescription] = useState('');
    const [operationDate, setOperationDate] = useState(new Date());
    const [operationValue, setOperationValue] = useState(0);
    const [operationCategory, setOperationCategory] = useState(0);
    const [loading, setLoading] = useState(false);
    const editObject = props.location.editObject;


    useEffect(() => {
        if (!!editObject) {
            setOperationDescription(editObject.description);
            setOperationDate(editObject.date);
            setOperationValue(editObject.value);
            setOperationCategory(editObject.category);
        }
    }, []);

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        const operation = {
            description: operationDescription,
            date: operationDate,
            value: operationValue,
            category: operationCategory,
        }
        const response = !!editObject ? await Api.CrudApi.update('operation', editObject.id, operation) : await Api.CrudApi.save('operation', operation);
        if (response) {
            props.history.push("/home/operation/list");
        }
        setLoading(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="titleForm">
                        <Icon type="tags" />
                        <strong>Cadastrar Operação</strong>
                    </div>
                    <div style={{ marginTop: 35 }}>
                        <div className="input-container">
                            <label htmlFor="operation_description">Descrição</label>
                            <Input
                                type="text"
                                placeholder="Descrição"
                                name="operation_description" id="operation_description"
                                required
                                onChange={e => {setOperationDescription(e.target.value) }}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="operation_date">Data</label>
                            <DatePicker
                                type="text"
                                placeholder="Data"
                                name="operation_date" id="operation_date"
                                required
                                onChange={e => { setOperationDate(e)}}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="operation_value">Valor</label>
                            <Input
                                type="number"
                                placeholder="Valor"
                                name="operation_value" id="operation_value"
                                required
                                onChange={e => { setOperationValue(e.target.value)}}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="operation_category">Categoria</label>
                            <Select
                                showSearch
                                id="operation_category"
                                name="operation_category"
                                placeholder="Selecione uma categoria"
                                optionFilterProp="children"
                                onChange={e => { }}
                                /* onSearch={e => { }} */
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack"> <Icon type="tags" />Teste1</Option>
                                <Option value="lucy"> <Icon type="tags" />Teste2</Option>
                                <Option value="tom"> <Icon type="tags" />Teste3</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <SubmitContent renderCancelButton={false} />
            </form>
            {loading &&
                <Spin className="loadIcon" size="large" />
            }
        </div>
    );
}
export default withRouter(CreateOperation);
