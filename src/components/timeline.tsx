import { useState } from 'react';

const events = [
    {
        time: '12:45 PM',
        title: 'Ceremony',
        description: 'Join us for the official ceremony at St. Eunans\'s Cathedral.',
    },
    {
        time: '2:00 PM',
        title: 'Photos',
        description: 'Family portraits immediately following the ceremony.',
    },
    {
        time: '3:00 PM',
        title: 'Reception',
        description: 'Drinks reception in An Grianan',
    },
    {
        time: '6:00 PM',
        title: 'Dinner',
        description: 'Dinner and Toasts',
    },
    {
        time: '9:00 PM',
        title: 'Band & DJ',
        description: 'The Band will begin followed by the DJ',
    }
];

export function WeddingTimeline() {
    // eslint-disable-next-line no-unused-vars
    const [hoveredEvent, setHoveredEvent] = useState(0);

    return (
        <div className="timeline-container">
            <h2 className="timeline-title">Event Schedule</h2>

            <div className="timeline">
                {events.map((event, index) => (
                    <div
                        key={event.title}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        onMouseEnter={() => setHoveredEvent(index)}
                        onMouseLeave={() => setHoveredEvent(0)}
                    >

                        <div className="timeline-content">
                            <div className="timeline-time">{event.time}</div>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
