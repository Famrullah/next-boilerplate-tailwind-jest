import React from "react";
import { SkewLoader } from 'react-spinners';

export const SkewLoaderComponent = () => (
    <div>
        <SkewLoader size={40} css={"margin-top:20%;margin-left:40%"}/><br/>
        <span className='ml-[40%]'>Loading ...</span>
    </div> 
)
