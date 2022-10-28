import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './pages/Main';

const App = React.memo(() => {
	return (
		<div>
      <h1>hello</h1>
			<Main />
		</div>
	);
});

export default App;
