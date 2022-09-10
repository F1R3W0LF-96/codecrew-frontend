import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { API, ARTICLE, } from '../../config/appConfig';
import { sortOrder } from '../../helpers/Constant';
import { sortData } from '../../helpers/HelperFunctions';
import "./ArticleList.css"

function ArticleList() {

    const [articleList, SetArticleList] = useState([]);
    const [sortingData, SetSortingData] = useState({
        order: "",
        column: ""
    })

    useEffect(() => {
        axios.get(
            // "http://localhost:5000/api/article"
            `${process.env.REACT_APP_BASE_URL}${API}${ARTICLE}`
        ).then((response) => {
            response = response.data.data
            SetArticleList(response)
            console.log("response", response)
        }).catch((err) => {
            console.log(":::err::", err)
        })

    }, [])

    const sortListData = (column) => {
        let clonnedData = [...articleList];
        const order = (sortingData.column === column &&sortingData.order === sortOrder.ASEC) ? sortOrder.DESC : sortOrder.ASEC
        clonnedData = sortData(clonnedData, column, order);
        SetArticleList(clonnedData);
        SetSortingData({
            ...sortingData,
            order,
            column
        });

    }
    return (

        <Table responsive className='article-list'>
            <thead>
                <tr>
                    <th>#</th>

                    {
                        articleList.length > 0 &&
                        Object.keys(articleList[0]).map((article, index) => {
                            if (index !== 0) {
                                return (<th key={index} onClick={() => sortListData(article)} >
                                    {article.toUpperCase()}
                                    {"  "}
                                    {sortingData.column === article 
                                         ?sortingData.order === sortOrder.ASEC?
                                        <i class="fa-solid fa-caret-down"></i> :
                                        <i class="fa-solid fa-caret-up"></i>:""}

                                </th>)
                            }
                        })
                    }
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    articleList.length > 0 &&
                    articleList.map((article, index) => {
                        return (
                            <tr>
                                <td key={index}>
                                    {index + 1}
                                </td>
                                <td key={index}>
                                    {article.title}
                                </td>
                                <td key={index}>
                                    {article.topic}
                                </td>
                                <td key={index}>
                                    {article.subtopic}
                                </td>
                                <td key={index}>
                                    {article.description}
                                </td>
                                <td>
                                    <Button onClick={()=>window.location.href=`${/article/}${article.title}`}>
                                        Navigate
                                    </Button>
                                </td>
                            </tr>

                        )
                    })
                }

            </tbody>
        </Table>
    )
}

export default ArticleList