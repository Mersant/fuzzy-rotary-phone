import React from 'react';


import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_JOURNAL } from '../utils/queries';

const SingleEntry = () => {

  const { journalId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_JOURNAL, {

    variables: { journalId: journalId },
  });

  const journal = data?.journal || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {journal.journalText}
        </blockquote>
      </div>

    </div>
  );
};

export default SingleEntry;