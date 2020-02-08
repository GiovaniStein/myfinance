import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import React, { Component, useState, useEffect } from "react";
import './TableList.css'



const TableList = ({ columns, dataRows , ...props }) => {

    const createHead = () => {
        return columns.map((column, index) => {
            return (
                <th key={column}>
                    {column}
                </th>
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
                    {dataRows()}
                </tbody>
            </table>
        </div>

    )
}



export default TableList;