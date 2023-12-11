import React from 'react';
import './News.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const NewsCard = (props) => {
    return (
        <Card key={props.news.title} className='newsCard' variant='outlined'>
            <a href={props.news.link} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"inherit"}}>
                {
                    props.news.image &&
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", objectFit: "contain", repeat: "no-repeat" }}
                        image={props.news.image}
                        alt="publication image"
                        className='publicationImage'
                    />
                }
                <CardContent>
                    {props.news.isnew &&
                        <Typography variant='body2' component='div' color='error' sx={{padding: "6px", background:"red", color:"white", width:"fit-content", borderRadius:"4px"}}>
                            New
                        </Typography>
                    }
                    <Typography variant='h5' component='h2' fontWeight={"600"} sx={{margin:"10px 0px"}}>
                        {props.news.title}
                    </Typography>
                    <Typography variant='body2' component='p'>
                        {props.news.date}
                    </Typography>
                    <Typography variant='body2' component='p'>
                        {props.news.content}
                    </Typography>
                </CardContent>
            </a>
        </Card>
    )

}

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/data/news.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setNews(myJson);
            });
    }, []);

    return (
        <div className='newsWrapper'>
            <h1>NEWS</h1>
            <div className='newsCardWrappers'>
                {
                    news ?
                        news.map((newsItem) => {
                            return (
                                <NewsCard key={newsItem.title} news={newsItem} />
                            )
                        })
                        :
                        <div>
                            Could not load news. Either data is not available or there is an error.
                        </div>
                }
            </div>
        </div>
    );
}

export default News;
