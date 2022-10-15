import React from 'react';
import { useQuery } from '@apollo/client';

import Journal from '../components/Journal';

import { QUERY_JOURNALS } from '../utils/queries';


const Home = (props) => {
  const journal = props.journal;
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid black' }}
        >
          <Journal />
        </div>
        <div className="col-12 col-md-8 mb-3">

          <Journal
            journals={journal}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;