import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Input, Icon, Switch, Spin } from 'antd';
import ModalIconsList from '../../components/modal/ModalIconsList';
import SubmitContent from '../../components/formcomp/SubmitContent';
import Api from '../../service/Api';

const CreateCategory = (props) => {

    const [selectIcon, setSelectIcon] = useState('tags');
    const [categoryName, setCategoryName] = useState('');
    const [categoryEnable, setCategoryEnable] = useState(true);
    const [loading, setLoading] = useState(false);
    const editObject = props.location.editObject;

    useEffect(() => {
        if (!!editObject) {
            setCategoryName(editObject.name);
            setSelectIcon(editObject.icon);
            setCategoryEnable(editObject.enable);
        }
    }, []);

   async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        const category = {
            name: categoryName,
            icon: selectIcon,
            enable: categoryEnable
        }
        const response = !!editObject ? await Api.CrudApi.update('category', editObject.id, category) : await Api.CrudApi.save('category', category);
        if (response) {
            setLoading(false);
            props.history.push("/home/category/list");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="titleForm">
                        <Icon type="tags" />
                        <strong>Cadastrar Categoria</strong>
                    </div>
                    <div style={{ marginTop: 35 }}>
                        <div className="input-container">
                            <label htmlFor="category_name">Nome</label>
                            <Input
                                type="text"
                                placeholder="Nome"
                                value={categoryName}
                                name="category_name" id="category_name"
                                required
                                onChange={e => { setCategoryName(e.target.value) }}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="category_icon">Icone</label>
                            <ModalIconsList
                                id="category_icon"
                                changeIcon={setSelectIcon}
                                saveIcon={selectIcon} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="category_enable">Ativa</label>
                            <Switch
                                name="category_enable"
                                id="category_enable"
                                defaultChecked={categoryEnable}
                                onChange={e => { setCategoryEnable(e) }}
                            />
                        </div>
                    </div>

                </div>
                <SubmitContent renderCancelButton={false} />
            </form>
            {loading &&
                <Spin className="loadIcon" size="large" />
            }
        </div>
    )
}
export default withRouter(CreateCategory);