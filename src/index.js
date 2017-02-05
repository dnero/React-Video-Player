import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCvbCsrYIpt2IHFGw3iJqtE8Iyhvked1ZA';


// create a new component. it should produce html
class App extends Component {
	constructor(props) {
			super(props);

			// default the state to no videos
			this.state = { videos: [] };

			// fetch youtube videos
			YTSearch({key: API_KEY, term: 'react js'}, (videos) => {
				this.setState({ videos });
			});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	};
};

// take this components html and put it ion the page in the dom

ReactDOM.render(<App />, document.querySelector('.container'));
