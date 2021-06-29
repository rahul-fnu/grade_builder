import React, { useRef } from "react";
//import SunEditor from '../../node_modules/suneditor-react';
import '../../node_modules/suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import dynamic from "next/dynamic";
import 'katex/dist/katex.min.css'
import katex from 'katex'   
const SunEditor = dynamic(import("../../node_modules/suneditor-react"), {
    ssr: false,
  });
const plugins = dynamic(import("../../node_modules/suneditor-react"),{
    ssr: false,
  });
export default function TextEditor (props) {
    function onTrigger (event) {
        props.parentCallback(props.part, editor.current.getContents());
        event.preventDefault();
    }
    const editor = useRef();
    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor) => {
       editor.current = sunEditor;
       //this.handleChange = this.handleChange.bind(this);
    };
    return (
        <>
            <div>
                <SunEditor getSunEditorInstance={getSunEditorInstance} setOptions={{
                    plugins: plugins,
                    height: 200,
                    katex: katex,
                    buttonList: [
                        ['bold', 'underline', 'italic', 'subscript', 'superscript', 'outdent', 'indent','math']
                    ]
                }}/>
            </div>
            <button onClick={onTrigger}>Save</button>
        </>
    );
};


