import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import React from 'react';
import Button from '@mui/material/Button';



interface DocBoxProps {
    Title : string;
    Content : string;
    DocumentRef : string;
}


const DocBox:  React.FC<DocBoxProps>  = ({Title, Content, DocumentRef}) => {
    return (
        <Card sx={{minWidth: 275 , maxWidth : 275}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {Title}
                </Typography>
                <br></br>
                <Typography variant="body2">
                    {Content}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}


export default DocBox;