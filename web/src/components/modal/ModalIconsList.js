import React, { useState, useEffect } from "react";
import IconsAsset from "../../utils/IconsAsset";
import "./IconsList.css"
import { Icon, Input, Button, Modal } from 'antd';
import './ModalForm.css';


const IconsList = ({ saveIcon = 'tags', changeIcon = (icon) => {}, ...props }) => {

    const [icons, setIcons] = useState(IconsAsset.icons);
    const [selectIcon, setSelectIcon] = useState(saveIcon);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setSelectIcon(saveIcon)
    }, [saveIcon]);
    
    function onSelectIcon(icon) {
        const iconSelect = document.getElementsByClassName('select');
        if (iconSelect.length > 0) {
            iconSelect[0].classList.remove('select')
        }
        document.getElementById(`li${icon}`).classList.add('select');
        setSelectIcon(icon);
        setVisible(false);
        changeIcon(icon)
    }


    function renderdirectionalIcons() {
        return icons.map((icon, index) => {
            return (
                <li className={selectIcon === icon ? 'select' : ''} key={index} id={`li${icon}`} onClick={(e) => { onSelectIcon(icon) }}>
                    <Icon type={icon}></Icon>
                    <span>{icon}</span>
                </li>
            )
        })
    }

    function searchIcons(e) {
        setIcons(IconsAsset.icons.filter(i => i.includes(e.target.value)));
    }


    function showModal() {
        setVisible(true);
    };

    function handleCancel(e) {
        setVisible(false);
    };


    return (
        <div>
            <Button icon={selectIcon} type="default" onClick={showModal} />
            <Modal
                width={800}
                title={<div><Icon type="tags" /> Selecione um Icone </div>}
                visible={visible}
                onCancel={handleCancel}
                footer={[]}
            >
                <div>
                    <Input onChange={(e) => { searchIcons(e) }} prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                    <div className="iconsListMain">
                        <div className="iconListContainer">
                            <ul>
                                {renderdirectionalIcons()}
                            </ul>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default IconsList;