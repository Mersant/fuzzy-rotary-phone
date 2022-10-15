import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {ADD_JOURNAL} from '../../utils/mutations'
import '../../styles/NewJournalEntry.css'
import {QUERY_ME, QUERY_SINGLE_JOURNAL} from '../../utils/queries'
import Auth from '../../utils/auth'

const NewJournalEntry = () => {
	const [status, setStatus] = useState("Submit");
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { journalEntryTextArea, journalImageLink } = e.target.elements;
		let details = {
			message: journalEntryTextArea.value,
			image: journalImageLink.value,
		};
		let response = await fetch("/newJournalEntry", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		setStatus(result.status);
	};
	return (
		<form id='newJournalEntryForm' onSubmit={handleSubmit}>
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
	);
};

export default NewJournalEntry;





