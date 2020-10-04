import React from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';

const activitiesPage = () => {
  const getActivities = async () => {
    axios
      .post('/.netlify/functions/get-strava-activities')
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <button onClick={getActivities}>Get Strava</button>
    </Layout>
  );
};

export default activitiesPage;
