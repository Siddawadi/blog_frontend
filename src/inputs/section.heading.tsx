
import { Link } from "react-router-dom";

interface ISection{
title:string,
subTitle:string,
link:string
 }

 export const SectionHeading =({title,subTitle,link}:ISection)=>{

    return(
        <div>
            <p>{title}</p>
            <p>{subTitle}</p>{
            <Link to={link}>Explore more</Link>
            }
        </div>
    )
 }