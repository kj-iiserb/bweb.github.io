import React from 'react';
import './Collaborators.css';

import { Card, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const CollaboratorCard = (props) => {
    return (
        <Card className='collaboratorCardMui' variant='outlined' sx={{
            ':hover': {
                transform: 'scale(1.05)',
            },
        }}>
            <CardContent >
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" >
                    {props.designation}
                </Typography>

            </CardContent>
        </Card>
    );
}

const Collaborators = () => {
    const [collaborators, setCollaborators] = useState([]);

    useEffect(() => {
        fetch('/data/collaborators.json'
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
            .then(function (newJson) {
                setCollaborators(newJson);
            });
    }, []);

    return (
        <>
            <div className='collaboratorsWrapper'>
                <h1>Collaborators</h1>
                <div className='collaboratorsCardsWrapper'>
                    {
                        collaborators ?
                            collaborators.map((member) => {
                                return (
                                    <CollaboratorCard key={member} name={member.name} designation={member.designation} />
                                )
                            })
                            :
                            <div>
                                Could not load collabroators details. Either data is not available or there is an error.
                            </div>
                    }
                </div>
            </div>


        </>
    );

}

export default Collaborators;
