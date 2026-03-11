import {WeddingTimeline} from "../components/timeline";
import {Rsvp} from "./rsvp";

export function Information (){
    return(
       <div className={"mainContentHeader"}>
           <p>Please join Mairéad and Conor on to celebrate their wedding day!<p/>
               The ceremony will be held on the <b><u>1st of May 2026</u></b> in St. Eunan&apos;s Cathedral,
               with a drinks reception following in An Grianan hotel.<p/>
               Let them know if you can make it by clicking the button below:
           </p>
           <Rsvp></Rsvp>
           <WeddingTimeline></WeddingTimeline>

       </div>
    )
}