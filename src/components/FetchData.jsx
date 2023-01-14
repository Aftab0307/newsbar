import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FetchData = ({cat}) => {

    const [data, setData] = useState(''); 
    const FetchData = async() =>{
    
        await axios.get(
            cat ?
           `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=690c1b8013984567bb2fe81c7225510a`
           :'https://newsapi.org/v2/top-headlines?country=in&apiKey=690c1b8013984567bb2fe81c7225510a'
            )
        .then((res) =>
            setData(res.data.articles)
        );
    };

    useEffect(() => {
      FetchData();   
    }, [cat])
    
  return (
    <div className='container my-4'>
        <h3>
        <u>Top Headline</u>
        </h3>
        <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight: '100vh'}}>
            {data ? data.map((items, index) =>(
            <>
            <div className='container my-3 p-3' style={{width: '600px', boxShadow: '2px 2px 10px gray',
            borderRadius: '20px'

          }}>
            <h5 className='my-2'>{items.title}</h5>
            <div className='d-flex justify-content-center align-items-center flex-column'>

            <img alt='image' src={items.urlToImage} className='img-fluid my-1' style=
            {{width: '600px',
             height: '350px',
             objectFit: 'cover'
            }}
            />
            </div>
            <p className='my-1'>{items.content}</p>
            <a href={items.url} target='blank'>View More</a>
            </div>
            
            </>
            )) : 'Loading...'}
        </div>
    </div>
  )
}

export default FetchData