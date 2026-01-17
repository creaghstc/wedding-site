// TabMenu.tsx - Horizontal menu that shows/hides content sections
import { useState } from 'react';
import {Information} from "../pages/information";
import {Directions} from "../pages/directions";
import {Accommodation} from "../pages/accommodation";
import {Rsvp} from "../pages/rsvp";

const sections = [
    {
        id: 'home',
        title: 'Information',
        content: (
            <Information></Information>
        )
    },
    {
        id: 'directions',
        title: 'Directions',
        content: (
            <Directions></Directions>
        )
    },
    {
        id: 'accommodation',
        title: 'Accommodation',
        content: (
            <Accommodation></Accommodation>
        )
    },
    {
        id: 'rsvp',
        title: 'RSVP',
        content: (
            <Rsvp></Rsvp>
        )
    }
];

export function TabMenu() {
    const [activeTab, setActiveTab] = useState('home');

    const activeContent = sections.find(section => section.id === activeTab)?.content;

    return (
        <div className="tab-container">
            {/* Horizontal tab buttons */}
            <nav className="tab-nav">
                {sections.map(section => (
                    <button
                        key={section.id}
                        className={`tab-btn ${activeTab === section.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(section.id)}
                    >
                        {section.title}
                    </button>
                ))}
            </nav>

            {/* Content that shows/hides based on selection */}
            <div className="tab-content">
                {activeContent}
            </div>
        </div>
    );
}
