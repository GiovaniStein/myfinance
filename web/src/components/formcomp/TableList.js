import React, { useState, useEffect, useRef } from "react";
import './TableList.css';
import Pagination from '../pagination/Pagination';
import { Input, Icon, Button } from 'antd';
import TableButtons from '../../components/formcomp/TableButtons';
import Api from '../../service/Api';
import moment from 'moment'



const TableList = ({ columns, endpoint = '', ...props }) => {

    const [total, setTotal] = useState(10);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const refInputSearch = useRef();

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
        let currentPage = page === 0 ? 1 : page;
        let offset = (currentPage - 1) * limit;
        setPage(currentPage);
        getData(offset, search);
    }

    const getData = async (offset, search = '') => {
        let results = await Api.ListApi.listValuesWithPagination(endpoint, offset, limit, search);
        if (!!results) {
            setData(results.data)
            setTotal(results.count);
        }
    }

    const searchData = () => {
        let search = refInputSearch.current.state.value;
        setPage(0);
        getData(0, search);
    }

    const createRows = () => {

        if(data.length === 0) {
            return(
                <tr>
                    <td>Sem dados cadastrados</td>
                </tr>
            )
        }

        return data.map((column, index) => {
            let keys = Object.keys(column);
            return (
                <tr key={index}>
                    {keys.map((key, indexKey) => {
                        if(key.includes('_id')){
                            return;
                        }
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
                        if (key === 'date') {
                            return (
                                <td key={`${index}${indexKey}`}>{moment(column[key]).format('DD/MM/YYYY')}</td>
                            )
                        }
                        return (
                            <td key={`${index}${indexKey}`}>{column[key]}</td>
                        )
                    })}
                    <td><TableButtons editObject={column} updateTable={updateTable} endpoint={endpoint} /></td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div className="listSearchContainer">
                <Input ref={refInputSearch} className="searchField" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                <div>
                    <Button onClick={searchData} icon="search" type="primary">
                        Pesquisar
                    </Button>
                </div>
            </div>
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
        </div>
    )
}




export default TableList;