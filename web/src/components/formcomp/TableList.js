import React, { Component, useState, useEffect } from "react";
import './TableList.css';
import Pagination from '../pagination/Pagination';
import { Icon } from 'antd';
import TableButtons from '../../components/formcomp/TableButtons';
import Api from '../../service/Api';



const TableList = ({ columns, endpoint = '', ...props }) => {

    const [total, setTotal] = useState(10);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        let offset = 0;
        getData(offset);
    }, []);

    const createHead = () => {
        return columns.map((column, index) => {
            return (
                <th key={column}>
                    {column}
                </th>
            )
        })
    }

    const updateTable = () => {
        onPageChange(page);
    }

    const onPageChange = (page) => {
        let currentPage = page === 0 ? 1: page;
        let offset = (currentPage - 1) * limit;
        setPage(currentPage);
        getData(offset);
    }

    const getData = async (offset) => {
        let results = await Api.ListApi.listValues(endpoint, offset, limit);
        if (!!results) {
            setData(results.data)
            setTotal(results.countValues);
        }
    }

    const createRows = () => {
        return data.map((column, index) => {
            let keys = Object.keys(column);
            return (
                <tr key={index}>
                    {keys.map((key, indexKey) => {
                        if (key === 'icon') {
                            return (
                                <td key={`${index}${indexKey}`}><Icon type={column[key]} /> {column[key]}</td>
                            )
                        }
                        if (key === 'enable') {
                            return (
                                <td key={`${index}${indexKey}`}>{column[key] ? 'Ativo' : 'Desativado'}</td>
                            )
                        }
                        return (
                            <td key={`${index}${indexKey}`}>{column[key]}</td>
                        )
                    })}
                    <td><TableButtons editObject={column} updateTable={updateTable} endpoint={endpoint}/></td>
                </tr>
            )
        })
    }

    return (
        <div className="tableListContainer">
            <table>
                <thead>
                    <tr>
                        {createHead()}
                    </tr>
                </thead>
                <tbody>
                    {createRows()}
                </tbody>
            </table>
            <Pagination changePageFunction={onPageChange} current={page} total={total} />
        </div>
    )
}




export default TableList;