import { Button } from 'antd';
import React from "react";
import './SubmitContent.css'

const SubmitContent = ({ saveFunction = () => { }, cancelFunction = () => { }, renderCancelButton = true, ...props }) => {
    return (
        <div className="submitContentContainer">
            <div>
                <Button onClick={saveFunction} icon="save" type="primary" htmlType="submit">Salvar</Button>
            </div>
            {renderCancelButton &&
                <div>
                    <Button onClick={cancelFunction} icon="save" type="danger">Cancelar</Button>
                </div>
            }
        </div>
    )
}

export default SubmitContent;