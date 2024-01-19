import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import React from 'react';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const AddDocBox  = () => {
    return (
        <Card sx={{minWidth: 275 , maxWidth : 275}}>
            <CardContent>
            <Typography variant="h5" component="div">
                    New Document
            </Typography>
            </CardContent>
            <CardActions>
                
                <Button size="small" sx={{
                    width : '100%',
                    height: '100%',
                    fontSize : '75px',
                    color : 'black'
                }}>+</Button>
                
            </CardActions>
        </Card>
    )
}


export default AddDocBox;