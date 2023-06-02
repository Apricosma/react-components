import './style/App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Gallery from './components/Gallery'


function App() {
	const navButtons = ['Home', 'Contact', 'About Us', 'Profile'];
	const bannerTitle = 'Lorem ipsum';
	const bannerContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	return (
		<div className="App">
			<Header
				title= "Components"
				navButtons={navButtons}
			/>
			<Banner 
				bannerTitle={bannerTitle}
				bannerContent={bannerContent}
			/>
			< Gallery />
		</div>
	);
}

export default App;
