"use client";

import React from 'react';
import DocBox from '../components/DocBox';
import AddDocBox from '../components/AddDocBox';
import Button from '@mui/material/Button';



const DocsPage = () => {
    return (
        <div>

            <h1 style={{
                fontSize : '50px'
                }}>Mimi Docs</h1>
            <br />
            <div
                style={{
                    width : '100%',
                    display : 'flex',
                    justifyContent : 'flex-end',
                    paddingRight    : '20%'
                }}
            >
                <Button variant="outlined" sx={{
                    color : 'red',
                    borderBlockColor : 'red',
                    borderLeftColor : 'red',
                    borderRightColor : 'red'
                }}>Logout</Button>
            </div>

            
            <div className='BoxContainer' style={{
                width : '100%',
                height : '100%',
                display : 'flex',
                flexWrap : 'wrap',
                gap : '10px',
                paddingLeft : '5%',
                paddingRight : '5%',
                marginTop : '2%',
                paddingBottom : '5%'
            }}>
                
                <DocBox Title={'Lorem Ipsum'} Content={'Lorem Ipsum Dolor Sir AmetLorem Ipsum Dolor Sir AmetLorem Ipsum Dolor Sir AmetLorem Ipsum Dolor Sir AmetLorem Ipsum Dolor Sir AmetLorem Ipsum Dolor Sir Amet'} DocumentRef={'/'}/>
                <AddDocBox/>
            </div>
        </div>
    )
}


export default DocsPage;