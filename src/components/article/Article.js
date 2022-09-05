import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { API, ARTICLE } from '../../config/appConfig'

const Article=(props)=> {
  const params = useParams();
  const [articleDetail,setArticleDetail]=useState("")

  useEffect(() => {
    axios.get(
        // "http://localhost:5000/api/article"
        `${process.env.REACT_APP_BASE_URL}${API}${ARTICLE}/${params.articleName}`
    ).then((response) => {
        response = response.data.data[0]
         setArticleDetail(response)
        console.log("response", response)
    }).catch((err) => {
        console.log(":::err::", err)
    })

}, [])
  return (
    <>
 { articleDetail&& 
       <div dangerouslySetInnerHTML={{__html: `${articleDetail.body}`}} />
      }
    </>
  )
}

export default Article