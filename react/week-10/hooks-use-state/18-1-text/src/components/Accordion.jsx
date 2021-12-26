import React, { useState } from 'react';

const ReadMoreLess = ({ text, maxLength }) => {
    const [readMore, setReadMore] = useState(true);

    const handleReadMoreClick = () => {
        setReadMore(!readMore);
    };

    const renderText = () => {
        const read = readMore ? 'read more' : 'read less';

        return (
            <p>
                {readMore ? text.slice(0, maxLength) : text}...
                <span className='read-more-link' onClick={handleReadMoreClick}>
                    {read}
                </span>
            </p>
        );
    };
    return <div className='content'>{renderText()}</div>;
};

export default ReadMoreLess;
