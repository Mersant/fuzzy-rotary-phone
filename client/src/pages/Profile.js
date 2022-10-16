import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AllJournals from '../components/AllJournals';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    const userData  = Auth.getProfile;

 const {loading, data} = useQuery(QUERY_ME)
 const user = data?.me || data?.user || {};
    
    // if(Auth.loggedIn())
    // {return <Navigate to ="/myJournals"/>}  //infinitely loops
    

    if(loading){
        return<div>Fetching those journals....</div>;
    }
    if(!user?.username){
        return(
            <h1>
                You need to be logged in to view your journals! Please log in!
            </h1>
        );
    }
    return (
        <div>
<<<<<<< HEAD
        <div class="flex-row justify-center mb-3">
          <h2 class="col-12 col-md-10 bg-dark text-light p-3 mb-5">
            Viewing {`${userData.data.username}'s`} profile.
=======
        <div className="flex-row justify-center mb-3">
          <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
            Viewing {`${user.username}'s`} profile.
>>>>>>> d595147bcd260958d115090696db48baa3d0b710
          </h2>
  
          <div className="col-12 col-md-10 mb-5">
            <AllJournals
              journals={user.journal}
            />
          </div>
        </div>
      </div>
    )
}

export default Profile