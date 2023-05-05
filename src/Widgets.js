import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (<div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <h4>{subtitle}</h4>
            </div>
        </div>);
    };

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Linked In news</h2>
                <InfoIcon />
            </div>
            {newsArticle("Araf is back", "Top news of the world 99")}
            {newsArticle("Tesla is hiring", "Tesla is blooming with blessings")}
            {newsArticle("BCS in the door", "Preli preparations are nothing")}
            {newsArticle("Bad Habits", "We need to avoid the bad habits of our life")}
            {newsArticle("Transformers the dark of the moon", "The moon ain't so far away")}
            {newsArticle("KZS", "Khulna zilla school, the best school in the world")}
            {newsArticle("CUET", "Puro bullshit akta place, though kaptai is near")}
            {newsArticle("Softexpoit", "A grat software industry for the future")}
        </div>
    );
}

export default Widgets;