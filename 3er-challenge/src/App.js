import React from 'react';
import HideAppBar from './components/Intro.tsx';
import  HorizontalLinearStepper from './components/Products.tsx';

function App() {
return (
	<>
		<HideAppBar />
		<div className='container'>
			<HorizontalLinearStepper />
		</div>
	</>
);
}

export default App;
