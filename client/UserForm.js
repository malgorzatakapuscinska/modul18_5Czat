import React, {Component} from 'react';
import styles from './UsersForm.css';

class UserForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: ''
		}
	}
	
	handleSubmit(e){
		e.preventDefault();
		this.props.onUserSubmit(this.state.name);
	}
	
	handleChange(e){
		const name = e.target.value;
		this.setState({
			
		})
	}
	render(){
		return(
			<form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
				<input 
					className={styles.UserInput}
					placeholder='Write your nickname and press enter'
					onChange={e => this.handleChange(e)}
					value={this.state.name}
				/>
			</form>
		);
	}
	
	
}

export default UserForm;