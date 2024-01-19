import Quill from 'quill';

// The text editor should rather be centralized rather than embedded
const quill = new Quill('#editor', {
    theme: 'snow',
});


export default quill;