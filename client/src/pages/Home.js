import React from 'react';

import NewJournalEntry from '../components/NewJournalEntry';


const Home = (props) => {
  const journal = props.journal;
  return (
    <main>
      <div class="flex-row justify-center">
        <div
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