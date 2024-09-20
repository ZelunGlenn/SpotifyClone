// can add more to make it like a music straming platform website

import React from 'react';

import { Container } from 'react-bootstrap';

const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes = process.env.REACT_APP_SPOTIFY_SCOPES;
//const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=714d0f1e8dca437faeac64fd0b3e6926&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played&show_dialog=true"
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true`;
//const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SPOTIFY_SCOPES}&show_dialog=true`;

export default function Login(){
  return <Container className="d-flex justify-content-center align-items-center"
  style={{minHeight: "100vh"}}
  >
    <a className='btn btn-success btn-lg' href={AUTH_URL}>Login With Spotify</a>
  </Container>
}