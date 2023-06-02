import './style/App.css';
import Header from './components/Header'

function App() {
	const navButtons = ['Home', 'Contact', 'About Us', 'Profile'];

	return (
		<div className="App">
			<Header
				title= "Components"
				navButtons={navButtons}
			/>
		</div>
	);
}

export default App;
