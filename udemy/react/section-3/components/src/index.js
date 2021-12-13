import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail
                author='Sam'
                timeAgo='Today at 4:45PM'
                content='Nice blog post!'
                avatarUrl='https://semantic-ui.com/images/avatar/small/elliot.jpg'
            />
            <CommentDetail
                author='Jim'
                timeAgo='Today at 2:00AM'
                content='Nice blog post!'
                avatarUrl='https://semantic-ui.com/images/avatar/small/jenny.jpg'
            />
            <CommentDetail
                author='Tim'
                timeAgo='Yesterday at 5:00PM'
                content="I don't like this blog post!"
                avatarUrl='https://semantic-ui.com/images/avatar/small/joe.jpg'
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
