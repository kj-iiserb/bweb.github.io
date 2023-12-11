import React from 'react';
import './MemberCard.css';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { FaLink } from 'react-icons/fa6';


const MemberCard = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Card className='memberCardMui' >
            <CardMedia
                component="img"
                alt="Profile Picture"
                height="140"
                image={props.pictureURL}
                title="Profile Picture"
            />
            <CardContent >
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" >
                    {props.designation}
                </Typography>

                <Typography variant="body2" color="textPrimary" component="p">
                    {props.about}
                </Typography>

                {showDetails && (
                    <div className='moreInfo'>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                props.moreInfo &&
                                <div>
                                    {props.moreInfo}
                                </div>
                            }
                            {
                                props.email &&
                                <div style={{ margin: "5px 0px", color: "black" }}>
                                    Email: {props.email}
                                </div>
                            }
                            {
                                props.social &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>Website <FaLink /> </a>
                                </div>
                            }
                            {
                                props.social2 &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social2} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>Linkedin <FaLink /> </a>
                                </div>
                            }
                        </Typography>
                    </div>
                )}
            </CardContent>
            <Button color="primary" onClick={() => setShowDetails(!showDetails)} style={{ marginTop: "auto" }}>
                {showDetails ? 'Show Less' : 'Show More'}
            </Button>
        </Card>
    );
}

export default MemberCard;
