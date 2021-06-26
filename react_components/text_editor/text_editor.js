import React, { useRef, useEffect, Component } from "react";
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
export default function TextEditor () {
       const editor = useRef();
       // The sunEditor parameter will be set to the core suneditor instance when this function is called
       const getSunEditorInstance = (sunEditor) => {
           editor.current = sunEditor;
       };
       katex.ParseError = false;
       return (
        <div>
            <SunEditor getSunEditorInstance={getSunEditorInstance} setOptions={{
                plugins: plugins,
                height: 200,
                katex: katex,
                buttonList: [
                    ['undo', 'redo', 'bold', 'underline', 'italic', 'subscript', 'superscript', 'outdent', 'indent', 'align', 'list', 'math']
                ]
            }}/>
        </div>
    );
};


