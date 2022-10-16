import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {ADD_JOURNAL} from '../../utils/mutations'
import '../../styles/NewJournalEntry.css'
import {QUERY_ME, QUERY_SINGLE_JOURNAL} from '../../utils/queries'
import Auth from '../../utils/auth'

const NewJournalEntry = () => {

	const [journalForm,setJournalForm] = useState({
		journalText: "",
		image:"",
	});
	
	const [addJournal,{error,data}] = useMutation(ADD_JOURNAL);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setJournalForm({
		  ...journalForm,
		  [name]: value,
		});
	  };

	const handleFormSubmit = async(event) => {
		event.preventDefault();
		try {
			const {data} =await addJournal({
				variables:{
				...journalForm
				},
			});
		}catch(err){
			console.error(err);
			console.log(data);
		}
	}
	return (
		<div>
		{Auth.loggedIn() ? (
		<form id='newJournalEntryForm' onSubmit={handleFormSubmit}>
			<label htmlFor="message" >Inscribe Thy Thoughts:</label>
			<div>
				<textarea
				name = "journalText" 
				type ="text" 
				value = {journalForm.journalText}
				onChange ={handleChange} 
				id='journalEntryTextArea' 
				className="centerBlock"
				required />
			</div>
			<div>
        <label htmlFor="image">Bind Them to an Image:</label>
        <input 
			name="image"
			placeholder="Imgur image link" 
			id="journalImageLink"
		    type="text"
		    value = {journalForm.image} 
		    onChange ={handleChange} 
		/>
      </div>
			<button id="submitJournalButton" type="submit">And Commit them Eternally</button>
		</form>
	): ( 
		<p>
		You need to be logged in to view your journal. Please{' '}
		<Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
	  </p>
	)}
	</div>
	)
};

export default NewJournalEntry;





