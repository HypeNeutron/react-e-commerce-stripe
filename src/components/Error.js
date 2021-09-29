import React from 'react';
import errorDatabase from '../assets/delete_database.svg';

const Error = () => (
  <div className="section section-center text-center">
    <img src={errorDatabase} alt="Error" width="100px" />
    <h3>
      Is had No Internet or Something wrong here Please Check Your Connection and Report us know
      about problem
    </h3>
  </div>
);

export default Error;
