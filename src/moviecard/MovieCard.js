import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import './MovieCard.css'

function MovieCard({movie}) {
  return (
    <div className='moviecard'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} className='imgcard'/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text className='cardtext'>{movie.description}</Card.Text>
    <Card.Text >{movie.rate} Star(s)</Card.Text>
    <ReactStars value={movie.rate}></ReactStars>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard