import React from 'react';
import QuizTitle from './QuizTitle';
import QuizQuestion from './QuizQuestion';
import QuizInputBar from './QuizInputBar';
import QuizInputText from './QuizInputText';

const Quiz = (props) => {
    localStorage.setItem('quiz', JSON.stringify(props));
    return (
        <div>
            <QuizTitle title={props.title} />
            <QuizQuestion question={props.question1} />
            <QuizInputBar />
            <QuizQuestion question={props.question2} />
            <QuizInputText />
        </div>
    );
};

export default Quiz;
