import React from "react";
import { Pagination } from 'antd';
import './Pagination.css'


const PaginationComponent = ({ init = 1, total = 10, className = '', current = 1, changePageFunction = () => {}, ...props }) => {

   const onChange = (page) => {
        changePageFunction(page);
    }

    return (
        <div className={`${className} paginationContainer`}>
            <Pagination onChange={e => {onChange(e)}} current={current} total={total} />
        </div>
    )
}

export default PaginationComponent;


