import React from 'react';
import { Link } from 'react-router-dom';

const AllJournals = ({
    journal= []
})=> {
    if(!journal.length){
        return <h1>No Journals to display!</h1>
    }
    return (
        <div>
         {journal.map((journal)=>(
        <div key = {journal._id} className = "card mb-3">   
        <Link
            className = "text-light"
            to={`/journals/${journal._id}`}
            >
                {journal.image}
        </Link>
            Entry from {journal.createdAt}
        </div>
    ))}
        </div>
      );
    };
export default AllJournals