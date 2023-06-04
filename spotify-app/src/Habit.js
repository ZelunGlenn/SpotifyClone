import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import TrackSearchResult from './TrackSearchResult';
import axios from 'axios';
import { useFetcher } from 'react-router-dom';
const spotifyWebApi = require('spotify-web-api-node')

export default function Habit({accessToken, spotifyApi}){

  const [rencentPlay, setRecentPlay] = useState([])
  const [morningSongs, setMorningSongs] = useState([])
  const [noonSongs, setNoonSongs] = useState([])
  const [nightSongs, setNightSongs] = useState([])
  const [cateSongs, setCateSongs] = useState(false)

  const [morningSongsFeatures, setMorningSongsFeatures] = useState([])
  const [morningDone, setMorningDone] = useState(false)

  useEffect(() =>{
    if(!accessToken) return
    axios.post('http://localhost:3001/recentPlay', {
      accessToken
    })
      .then(res=>{
        // console.log(res.data.track[0].track);
        setRecentPlay(res.data.track.map(track => {
          return {
            time: new Date(track.played_at).getHours(),
            seed: track.track.id
          }
        }))
      })
  }, [accessToken])

  useEffect(() => {
    if(rencentPlay.length <= 0) return
    setMorningSongs(
      rencentPlay.filter(track => {
        return (track.time >= 6 && track.time < 12)
      })
    )
    setNoonSongs(
      rencentPlay.filter(track => {
        return (track.time >= 12 && track.time <= 18)
      })
    )
    setNightSongs(
      rencentPlay.filter(track => {
        // console.log(new Date().getHours())
        return ((track.time > 18 && track.time <= 23) || (track.time >= 0 && track.time < 6))
      })
    )
    setCateSongs(true);
  }, [rencentPlay])

  // useEffect(() => {
  //   if(!spotifyApi) return
  //   if(rencentPlay.length <= 0) return
  //   spotifyApi.getRecommendations({seed_tracks: })
  // }, [spotifyApi, rencentPlay])

  // useEffect(() => {
  //   if(morningSongs.length <= 0 && noonSongs.length <= 0 && nightSongs.length <= 0) return
  //   if(!cateSongs) return
  //   spotifyApi
  //   // axios.post('http://localhost:3001/Habit', {
  //   //   accessToken,
  //   //   morningSongs
  //   // })
  //   //   .then(res => {
  //   //     console.log(res.data)
  //   //   })

  // }, [cateSongs])

  return (
    <div>
      <h1>
        Listening Habits
      </h1>

    </div>
  )
}