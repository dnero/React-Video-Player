import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCvbCsrYIpt2IHFGw3iJqtE8Iyhvked1ZA';

// create a new component. it should produce html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
};

// take this components html and put it ion the page in the dom

ReactDOM.render(<App />, document.querySelector('.container'));