import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    //same logic as in Search.jsx.
    // we are using debouncedText to make an API call to translate the text
    // only when the user stops typing for 500ms.
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {}, //this is the body of the request- we don't need to send any information there
                {
                    //this is the headers of the request
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                }
            );

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    );
};

export default Convert;
