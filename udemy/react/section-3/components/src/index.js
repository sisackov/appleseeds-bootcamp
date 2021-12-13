import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo='Today at 4:45PM'
                    content='Nice blog post!'
                    avatarUrl='https://semantic-ui.com/images/avatar/small/elliot.jpg'
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author='Jim'
                    timeAgo='Today at 2:00AM'
                    content='I like the subject'
                    avatarUrl='https://semantic-ui.com/images/avatar/small/jenny.jpg'
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author='Tim'
                    timeAgo='Yesterday at 5:00PM'
                    content="I don't like this blog post!"
                    avatarUrl='https://semantic-ui.com/images/avatar/small/joe.jpg'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
