import React from 'react';

class DataList extends React.Component {
    getCards = () => {
        const data = this.props.data;
        return data.map((obj) => {
            return (
                <div key={`avatar-${obj.id}`} className='card'>
                    <h3>{obj.name}</h3>
                    <div className='details'>
                        <div className='details-card'>
                            <h5>{`Born on: `}</h5>
                            <span>{obj.birthday}</span>
                        </div>
                        <div className='details-card'>
                            <h5>{`Favorite Meats: `}</h5>
                            <span>{obj.favoriteFoods.meats.join(', ')}</span>
                        </div>
                        <div className='details-card'>
                            <h5>{`Favorite Fish: `}</h5>
                            <span>{obj.favoriteFoods.fish.join(', ')}</span>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className='avatar-container'>
                <h2>{this.props.label}</h2>
                {this.getCards()}
            </div>
        );
    }
}

export default DataList;
