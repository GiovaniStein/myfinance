import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Input, Icon, Switch } from 'antd';
import ModalIconsList from '../../components/modal/ModalIconsList';
import SubmitContent from '../../components/formcomp/SubmitContent'


const CreateCategory = (props) => {

    const [selectIcon, setSelectIcon] = useState('tags');
    const [categoryName, setCategoryName] = useState('');
    const [categoryEnable, setCategoryEnable] = useState(true);


    /* useEffect(() => {
        
    }, []); */

    async function handleSubmit(e) {
        e.preventDefault();
       const category = {
        category_name: categoryName,
        icon_name: selectIcon,
        category_enable: categoryEnable
       }
       console.log('category ',category);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="titleForm">
                    <Icon type="tags" />
                    <strong>Cadastrar Categoria</strong>
                </div>

                <div className="input-container">
                    <label htmlFor="category_name">Nome</label>
                    <Input
                        type="text"
                        placeholder="Nome"
                        name="category_name" id="category_name"
                        required
                        onChange={e => {setCategoryName(e.target.value)}}
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
                        onChange={e => {setCategoryEnable(e)}}
                    />
                </div>
            </div>
            <SubmitContent />
        </form>
    )
}
export default withRouter(CreateCategory);