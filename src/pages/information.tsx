import {WeddingTimeline} from "../components/timeline";

export function Information (){
    return(
       <div className={"mainContentHeader"}>
           <p>Hi everyone,<br/>Mairead and Conor are delighted to invite you to their wedding!
               <br/>The ceremony will be held on the <b><u>1st of May 2026</u></b> in St. Eunan's Cathedral,
               with a drinks reception following in An Ghrianan</p>

               <WeddingTimeline></WeddingTimeline>

       </div>
    )
}