export function Directions() {
    return (
        <div className="directionsContainer">
            <p>The ceremony will be held in St. Eunan&apos;s Cathedral, please be seated <b>by 12:45</b>.<p/>
                There will be a bus leaving for the recpetion after the ceremony.<p/>
                Please let us know in the <a href={"https://withjoy.com/mairead-with-conor/rsvp"} target={"_blank"} rel="noreferrer">RSVP</a> if you will require this bus service.
            </p>
            <iframe
                title={"Cathedral Directions"}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2571.875401695773!2d-7.7376956280841815!3d54.95064589547092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485f95005e8c7d6d%3A0xe77ad7440aa9fda!2sSt%20Eunan%E2%80%99s%20Cathedral!5e0!3m2!1sen!2sie!4v1768651021142!5m2!1sen!2sie"
                loading="lazy" className={"directions"}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

            <p>The reception will be in An Ghrianan Hotel in Burt at 3:30pm.<p/>
                There will be a bus leaving reception that will stop off in Letterkenny and continue to Creeslough after the evening has finished.<p/>
                Please let us know in the <a href={"https://withjoy.com/mairead-with-conor/rsvp"} target={"_blank"} rel="noreferrer">RSVP</a> if you will require this bus service.
            </p>
            <iframe
                title={"Reception Directions"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.2435580624137!2d-7.436073322325873!3d55.038948246746465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fe4511b9b1a53%3A0x992053a02d61b159!2sAn%20Grianan%20Hotel!5e0!3m2!1sen!2sie!4v1768651359836!5m2!1sen!2sie"
                loading="lazy" className={"directions"}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}