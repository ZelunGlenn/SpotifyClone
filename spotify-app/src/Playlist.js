import {useEffect, useState} from 'react'

export default function Playlist({playlist}) {

  return (
    <div>
    {
      playlist.map(track => (
      <div 
      className='d-flex m-2 align-items-center'
      style = {{cursor: "pointer"}}
      >
        <img src = {track.albumUrl} style = {{height: '64px', width:'64px'}} />
        <div className='ml-3'>
          <div>{track.title}</div>
        </div>
      </div>

      ))
    }
    </div>
  )
}