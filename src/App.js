import './style/App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


function App() {
	const navButtons = ['Home', 'Contact', 'About Us', 'Profile'];
	const bannerTitle = 'Expect Excellence, Expect NexT';
	const bannerContent = 'Step into the realm of extraordinary possibilities with NexTronix, the leading innovator in silicone-based life augmentation. Our cutting-edge technologies and revolutionary materials unlock new horizons for enhancing the capabilities of silicone-based life. NexTronix empowers individuals and industries to higher levels of excellence. From higher-form silicon life to humans wishing to have a little taste of NexT, step into the future of NexTronix and embrace a world without boundaries.'

	// add an image and it will automatically be added to the gallery!
    const imageUrls = [
		'https://files.catbox.moe/gp7jgm.jpg',
        'https://files.catbox.moe/bxlmr1.jpg',
        'https://files.catbox.moe/uytll8.jpg',
        'https://files.catbox.moe/zz7vd2.jpg',
	];

	const footerList = ['Home', 'About', 'Contact', 'Support'];

	return (
		<div className="App">
			<Header
				title= "NexTronix"
				navButtons={navButtons}
			/>
			<Banner 
				bannerTitle={bannerTitle}
				bannerContent={bannerContent}
			/>
			< Gallery imageUrls={imageUrls} />

			< Footer footerList={footerList} />
		</div>
	);
}

export default App;
