import React from 'react'
import Card from 'react-bootstrap/Card';

const Player = (props) => {
    const { name, team, nationality, jerseyNumber, age, imageUrl } = props;
  
    return (
    <div>
      <Card style={{ width: '18rem',height:"370px" }}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {team}<br />
            Nationality: {nationality}<br />
            Jersey Number: {jerseyNumber}<br />
            Age: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
Player.defaultProps = {
    name: "Karim chebbi",
    team: "gomycode",
    nationality: "tunisia",
    jerseyNumber: 10,
    age: 32,
    imageUrl: "https://gomycodelearndev.blob.core.windows.net/profiles/708069db-0a85-43f9-af38-cc472a3eb07e-133144537385052754.jpg"
  };
export default Player