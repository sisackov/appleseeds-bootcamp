import React from 'react';
import './App.css';
import { data as dataArray, getBornBefore, getValues } from './data';
import DataList from './DataList';
import NameComponent from './NameComponent';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            filter: 1990,
        };
    }

    componentDidMount() {
        this.setState(() => {
            return { isLoading: false, data: dataArray };
        });
    }

    render() {
        const { data, isLoading, filter } = this.state; //!destructuring TODO:understand this:)
        if (isLoading) {
            return <p>Loading...</p>;
        } else {
            return (
                <div className='container'>
                    <h1>Data Massaging</h1>
                    <NameComponent data={getValues(data, 'name')} />
                    <DataList
                        data={getBornBefore(data, filter)}
                        label={`Born before ${filter}`}
                    />
                </div>
            );
        }
    }
}

export default App;
