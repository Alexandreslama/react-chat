import React from 'react';


class Formulaire extends React.Component{
	render() {
		return(
			
			<form className="form">
				 <textarea maxlength="140" 
				 	       required>
				 </textarea>

				 <div className="info">140</div>

				   <button type="submit"> Send </button>
			</form>
			


		)
	}
}

export default Formulaire;