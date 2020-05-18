import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Input, Select, Icon, Switch, Spin } from 'antd';
import SubmitContent from '../../components/formcomp/SubmitContent';
import Api from '../../service/Api';

const { Option } = Select;

const CreateLocation = (props) => {

    const [locationName, setLocationName] = useState('');
    const [locationLat, setLocationLat] = useState(0.0);
    const [locationLong, setLocationLong] = useState(0.0);
    const [locationCategory, setLocationCategory] = useState(0);
    const [locationEnable, setLocationEnable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const editObject = props.location.editObject;

    useEffect(() => {
        if (!!editObject) {
            setLocationName(editObject.name);
            setLocationLat(editObject.lat);
            setLocationLong(editObject.long);
            setLocationCategory(editObject.category_id);
            setLocationEnable(editObject.enable);
        }
        getCategories();
    }, []);

    const getCategories = async () => {
        let categoriesList = await Api.ListApi.listAll('category');
        setCategories(categoriesList);
    }

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        const location = {
            name: locationName,
            lat: locationLat,
            long: locationLong,
            categoryId: locationCategory,
            enable: locationEnable
        }
        const response = !!editObject ? await Api.CrudApi.update('location', editObject.id, location) : await Api.CrudApi.save('location', location);
        if (response) {
            props.history.push("/home/location/list");
        }
        setLoading(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="titleForm">
                        <Icon type="tags" />
                        <strong>Cadastrar Local</strong>
                    </div>
                    <div style={{ marginTop: 35 }}>
                        <div className="input-container">
                            <label htmlFor="location_name">Nome</label>
                            <Input
                                type="text"
                                value={locationName}
                                placeholder="Nome"
                                name="location_name" id="location_name"
                                required
                                onChange={e => { setLocationName(e.target.value) }}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="location_lat">Latitude</label>
                            <Input
                                type="number"
                                value={locationLat}
                                placeholder="Latitude"
                                name="location_lat" id="location_lat"
                                required
                                onChange={e => { setLocationLat(e.target.value) }}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="location_long">Longitude</label>
                            <Input
                                type="number"
                                value={locationLong}
                                placeholder="Longitude"
                                name="location_long" id="location_long"
                                required
                                onChange={e => { setLocationLong(e.target.value) }}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="location_category">Categoria</label>
                            <Select
                                value={locationCategory}
                                showSearch
                                required
                                id="location_category"
                                name="location_category"
                                placeholder="Selecione uma categoria"
                                optionFilterProp="children"
                                onChange={e => { setLocationCategory(e) }}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value={0}> Selecione uma categoria</Option>
                                {categories.map((category, index) => {
                                    return (
                                        <Option key={index} value={category.id}>
                                            <Icon type={category.icon} /> {category.name}
                                        </Option>
                                    )
                                })}

                            </Select>
                        </div>
                        <div className="input-container">
                            <label htmlFor="location_enable">Ativa</label>
                            <Switch
                                name="location_enable"
                                id="location_enable"
                                defaultChecked={locationEnable}
                                onChange={e => { setLocationEnable(e) }}
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
    );
}
export default withRouter(CreateLocation);

