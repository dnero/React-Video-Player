import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCvbCsrYIpt2IHFGw3iJqtE8Iyhvked1ZA';


// create a new component. it should produce html
class App extends Component {
	constructor(props) {
			super(props);

			this.state = { videos: [] };

			YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
				this.setState({ videos });
			});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	};
};

// take this components html and put it ion the page in the dom

ReactDOM.render(<App />, document.querySelector('.container'));
