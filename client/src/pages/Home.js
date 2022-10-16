import React from 'react';

import NewJournalEntry from '../components/NewJournalEntry';


const Home = (props) => {
  const journal = props.journal;
  return (
    <main>
      <div class="flex-row justify-center">
        <div

          class="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid black' }}

        >
        </div>
        <div className="col-12 col-md-8 mb-3">

        <NewJournalEntry
        journals={journal}
        />
        </div>
      </div>
    </main>
  );
};

export default Home;