import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AllJournals from '../components/AllJournals';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import '../styles/Profile.css'

const Profile = () => {
  const userData = Auth.getProfile;

  const { loading, data } = useQuery(QUERY_ME)
  const user = data?.me || {};
  // if(Auth.loggedIn())
  // {return <Navigate to ="/myJournals"/>}  //infinitely loops


  if (loading) {
    return <div>Fetching those journals....</div>;
  }
  if (!Auth.loggedIn) {
    return (
      <h1>
        You need to be logged in to view your journals! Please log in!
      </h1>
    );
  }

  return (
    <main>
      <div className="flex-row justify-center mb-3">
        <div className='justify-center'>
          <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5 myJournalsHeader">
            Viewing Your Profile.
          </h2>
        </div>
      </div>

      <div className="flex-row col-12 col-md-10 mb-5 justify-center">
        <AllJournals
          journals={user.journal}
        />
      </div>
    </main>

  )
}

export default Profile