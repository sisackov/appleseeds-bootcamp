import React from 'react';
import Checkbox from './Checkbox';

class App extends React.Component {
    render() {
        return (
            <div>
                <Checkbox
                    key='checkbox-1'
                    text='I read the terms of the app'
                    selected={false}
                />
                <Checkbox
                    key='checkbox-2'
                    text='I agree to the terms of the app'
                    selected={false}
                />
                <Checkbox
                    key='checkbox-3'
                    text='I want to get the weekly newsletter'
                    selected={true}
                />
                <Checkbox
                    key='checkbox-4'
                    text='I want to get sales and offers'
                    selected={true}
                />
            </div>
        );
    }
}

export default App;
