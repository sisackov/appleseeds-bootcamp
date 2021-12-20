import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('REACT'); //to show some default videos on loading
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        const { videos, selectedVideo } = this.state;
        return (
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            {/* there is a total of 16 wide columns in semantic ui */}
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
