import React, { useRef, useState } from "react";
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
        setText(editor.current.getContents())
        props.parentCallback(editor.current.getContents());
        // event.preventDefault();
    }
    const [text, setText] = useState("");
    const editor = useRef();
    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor) => {
       editor.current = sunEditor;
       //this.handleChange = this.handleChange.bind(this);
    };
    return (
        <>
            <div>
                <SunEditor content = {text} getSunEditorInstance={getSunEditorInstance} setOptions={{
                    plugins: plugins,
                    height: 200,
                    katex: katex,
                    buttonList: [
                        ['bold', 'underline', 'italic', 'subscript', 'superscript', 'outdent', 'indent','math'],
                        
                        ['%750', [
                            ['bold', 'underline', 'italic', 'subscript', 'superscript'],
                            ['-right', ':i-More Misc-default.more_vertical', 'outdent', 'indent','math'],
                        ]],

                        ['%500', [
                            ['bold', 'underline', 'italic'],
                            ['-right', ':i-More Misc-default.more_vertical',  'subscript', 'superscript', 'outdent', 'indent','math'],
                        ]],

                        ['%250', [
                            ['bold'],
                            ['-right', ':i-More Misc-default.more_vertical', 'underline', 'italic', 'subscript', 'superscript', 'outdent', 'indent','math'],
                        ]]
                    ]
                }} onChange={onTrigger}/>
            </div>
            {/* <button onClick={onTrigger}>Save</button> */}
        </>
    );
};


