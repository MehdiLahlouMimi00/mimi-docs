"use client";

import React , {useRef} from 'react';
import TextEditor from '../components/TextEditor';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import jsPDF from 'jspdf';


const EditorPage = () => {
    const creactePDF = (classname : string, fileName : string) => {
        // class : ql-editor
        const element : any = document.querySelector(classname);

        if (!element)
        {
            alert("Wrong classname");
        }

        const doc = new jsPDF();
        doc.html(element    , {
            async callback(doc) {
                await doc.save(fileName);
            },
        });

    }

    return (
    <div>
        <h1
            style={{
                fontSize : "50px"
            }}
        >Mimi docs</h1>
        <br/>
        <br/>

        <Link href="/documents" underline="hover">
            {'<- Go back to documents'}
        </Link>
        <br/>

        <div id="Editor-container" style={{
            display : "flex",
            width : "10 0%",
            flexDirection : "column",
            alignItems : "center",
            gap : '10px'
            
        }}>

            <TextField id="outlined-basic" label="Document Title" variant="outlined" sx={{
                        backgroundColor : "gray"
                    }}/>
                    <br></br>
                    <br></br>
            
             
            <TextEditor w={"100%"} h={"100%"} />
            

            <Button variant="contained" sx={{
                backgroundColor : 'green'
            }}>Save</Button>
            <Button variant="contained" sx={{
                backgroundColor : 'red'
            }} onClick={()=>creactePDF("ql-editor", 'test.pdf')}>Export as PDF</Button>
            <Button variant="contained" sx={{
                backgroundColor : 'cyan',
                color : 'black'
            }}>Open Chat</Button>
            
        </div>
    </div>
    );
}

export default EditorPage;