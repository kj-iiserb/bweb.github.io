import React from 'react';
import './UsefulLinks.css'
import { useState, useEffect } from 'react';

import { Card, Typography } from '@mui/material';

const LinkCard = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopner">
            <Card variant='outlined' sx={{ background: "#fff0", padding: "10px", boxSizing: "border-box", borderColor: "white" }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ margin: "0px", fontWeight: "700", color: "white" }}>
                    {props.text}
                </Typography>
            </Card>
        </a>
    )
}

const UsefulLinks = () => {
    const [links, setLinks] = useState([]);
    useEffect(() => {
        fetch('/data/usefulLinks.json'
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
                setLinks(myJson);
            });
    }, []);

    return (
        <div className='linksWrapper'>
            <Typography variant='h4' sx={{ color: "white", fontWeight: "700" }}>
                Current Vacancies
            </Typography>
            <div className='linksCardsWrapper'>
            {
                links ?
                    links.map((link) => {
                        return (
                            <LinkCard key={link.text} link={link.link} text={link.text} />
                        )
                    })
                    :
                    <div>
                        Could not load links. Either data is not available or there is an error.
                    </div>
            }
            </div>
        </div>
    );
}

export default UsefulLinks;
