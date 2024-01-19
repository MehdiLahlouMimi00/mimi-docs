import React, { useEffect } from 'react';
import Quill from 'quill';



interface TextEditorProps {
  w: string;
  h: string;
}


const TextEditor :  React.FC<TextEditorProps> = ({ w, h }) => {
    useEffect(() => {
        const quillStylesheet = document.createElement('link');
        quillStylesheet.rel = 'stylesheet';
        quillStylesheet.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
        document.head.appendChild(quillStylesheet);
    
        const quillScript = document.createElement('script');
        quillScript.src = 'https://cdn.quilljs.com/1.3.6/quill.js';
        document.body.appendChild(quillScript);
    
        quillScript.onload = () => {
          const quill = new Quill('#editor', {
            theme: 'snow',
        });
        };
    
        return () => {
          document.head.removeChild(quillStylesheet);
          document.body.removeChild(quillScript);
        };
      }, []); 
    
    return (
        <div id="editor" style={{
          width : w,
          height : h
        }}>
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br /></p>
        </div>
      );
}

export default TextEditor;