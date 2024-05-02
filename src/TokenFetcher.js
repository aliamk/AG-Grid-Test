// TokenFetcher.js
import React, { useState, useEffect } from 'react';

const TokenFetcher = ({ username, password, onDataFetch }) => {
  
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('https://localhost:3000/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        onDataFetch(data.token); // assuming token is received in the response
        console.log('token_appjs:', data.token)
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
    fetchToken();
  }, [username, password, onDataFetch]);

  return null; // or loading indicator
};

export default TokenFetcher;
