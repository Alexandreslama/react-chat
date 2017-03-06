//import the react
import React from 'react';
import ReactDOM from 'react-dom';
//imprt the css 
import './index.css';
//import components
import Connexion from './components/Connexion'
import App from './components/App'
import Notfound from './components/Notfound'
//import react-router
import { BrowserRouter, Match, Miss} from 'react-router';



const Root = () => {

	return (
		<BrowserRouter>
			<div>
				<Match exactly 
					   pattern="/" 
					   component={Connexion}/>
			    <Match exactly 
					   pattern="/pseudo/:pseudo" 
					   component={App}/>
				<Miss component={Notfound} />
			</div>

		</BrowserRouter>
 )
}



ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
