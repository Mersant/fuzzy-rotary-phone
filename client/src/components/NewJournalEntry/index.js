import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {ADD_JOURNAL} from '../../utils/mutations'
import '../../styles/NewJournalEntry.css'
import {QUERY_ME, QUERY_SINGLE_JOURNAL} from '../../utils/queries'
import Auth from '../../utils/auth'

const NewJournalEntry = () => {

	const [journalText,setJournalText] = useState('');
	const [image,setImage] = useState ('')

	const [addJournal,{error}] = useMutation(ADD_JOURNAL,{
		update(cache,{data:{addJournal}}){
			const {me} = cache.readQuery({query:QUERY_ME});
			cache.writeQuery({
				query:QUERY_ME,
				data:{me:{...me,journal:[...me.journal,addJournal]}}
			})
		}
	})
	const handleFormSubmit = async(event) => {
		event.preventDefault();
		try {
			const {data} =await ADD_JOURNAL({
				variables:{
					journalText,
					image,
				},
			});
		}catch(err){
			console.error(err);
		}
	}
	return (
		<div>
		{Auth.loggedIn() ? (
		<form id='newJournalEntryForm' onSubmit={handleFormSubmit}>
			<label htmlFor="message">Inscribe Thy Thoughts:</label>
			<div>
				<textarea id='journalEntryTextArea' className="centerBlock" required />
			</div>
			<div>
        <label htmlFor="image">Bind Them to an Image:</label>
        <input placeholder="Imgur image link" id="journalImageLink" />
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





