import React, { useState } from 'react';
import { Container, Button, Alert, Badge, Row, Col } from 'react-bootstrap';

const choices = ['rock', 'paper', 'scissors', 'gun', 'grenade', 'laser'];

const getRandomChoice = () => {
  const weightedChoices = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'gun', 'grenade', 'laser'];
  return weightedChoices[Math.floor(Math.random() * weightedChoices.length)];
};

const getResult = (player, computer) => {
  if (player === computer) {
    return {result: 'draw', message: 'You picked the same move! It is a draw.'};
  } else if (player === 'rock' && computer === 'gun') {
    return {result: 'win', message: 'The computer shot a bullet that richocheted off your rock! It is a win for you.'};
  } else if (player === 'rock' && computer === 'grenade') {
    return {result: 'lose', message: 'The computer threw a grenade that exploded your rock! You lose.'};
  } else if (player === 'rock' && computer === 'laser') {
    return {result: 'lose', message: 'The computer shot a laser that melted your rock! You lose.'};
  } else if (player === 'paper' && computer === 'gun') {
    return {result: 'lose', message: 'The computer shot a bullet that blasted through your paper! You lose.'};
  } else if (player === 'paper' && computer === 'grenade') {
    return {result: 'lose', message: 'The computer threw a grenade that burned your paper! You lose.'};
  } else if (player === 'paper' && computer === 'laser') {
    return {result: 'lose', message: 'The computer shot a laser that atomized your paper! You lose.'};
  } else if (player === 'scissors' && computer === 'gun') {
    return {result: 'win', message: 'The computer shot a bullet that your scissors cut in half! You win.'};
  } else if (player === 'scissors' && computer === 'grenade') {
    return {result: 'lose', message: 'The computer threw a grenade that destroyed your scissors and killed you! You lose.'};
  } else if (player === 'scissors' && computer === 'laser') {
    return {result: 'win', message: 'The computer shot a laser that you deflected with your scissors! You win.'};
  } else if (player === 'rock' && computer === 'paper') {
    return {result: 'lose', message: 'The computer wrapped your rock in paper! You lose.'};
  } else if (player === 'rock' && computer === 'scissors') {
    return {result: 'win', message: 'You smashed the computer\'s scissors with your rock! You win.'};
  } else if (player === 'paper' && computer === 'rock') {
    return {result: 'win', message: 'You wrapped the computer\'s rock in paper! You win.'};
  } else if (player === 'paper' && computer === 'scissors') {
    return {result: 'lose', message: 'The computer cut your paper with its scissors! You lose.'};
  } else if (player === 'scissors' && computer === 'rock') {
    return {result: 'lose', message: 'The computer smashed your scissors with its rock! You lose.'};
  } else if (player === 'scissors' && computer === 'paper') {
    return {result: 'win', message: 'You cut the computer\'s paper with your scissors! You win.'};
  }else if (player === 'gun' && computer === 'rock') {
    return {result: 'win', message: 'You shot a bullet that richocheted off if the computer\'s rock! It is a win for technology.'};
  } else if (player === 'grenade' && computer === 'rock') {
    return {result: 'win', message: 'You threw a grenade that exploded the computer\'s rock! You win.'};
  } else if (player === 'laser' && computer === 'rock') {
    return {result: 'win', message: 'You shot a laser that melted the computer\'s rock! You win.'};
  } else if (player === 'gun' && computer === 'paper') {
    return {result: 'win', message: 'You shot a bullet that blasted through the computer\'s paper! You win.'};
  } else if (player === 'grenade' && computer === 'paper') {
    return {result: 'win', message: 'You threw a grenade that burned the computer\'s paper! You win.'};
  } else if (player === 'laser' && computer === 'paper') {
    return {result: 'win', message: 'You shot a laser that atomized the computer\'s paper! You win.'};
  } else if (player === 'gun' && computer === 'scissors') {
    return {result: 'loss', message: 'You shot a bullet that was cut in half by the computer\'s scissors! You lose.'};
  } else if (player === 'grenade' && computer === 'scissors') {
    return {result: 'win', message: 'You threw a grenade that destroyed the computer\'s scissors and killed the computer! You win.'};
  } else if (player === 'laser' && computer === 'scissors') {
    return {result: 'loss', message: 'You shot a laser that was deflected back at you by the computer\'s scissors! You win.'};
  }
  return {result: 'draw', message: 'Unexpected move interaction. It is a draw by default.'};
};

export default function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [resultMessage, setResultMessage] = useState('');  // For the detailed message text
  const [resultType, setResultType] = useState('');        // For 'win', 'lose', or 'draw'

  const play = (choice) => {
    const compChoice = getRandomChoice();
    const outcome = getResult(choice, compChoice);
    
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    setResultMessage(outcome.message); // set the detailed message
    setResultType(outcome.result); // set the result
    if (outcome.result === 'win') setPlayerScore(p => p + 1);
    if (outcome.result === 'lose') setComputerScore(c => c + 1);
  };

  const resultVariant = resultType === 'win' ? 'success' : resultType === 'lose' ? 'danger' : resultType === 'draw' ? 'warning' : 'secondary';

  return (
    <Container className="text-center py-5">
      <h1 className="mb-4 text-primary"><strong>🪨📄✂️ Rock Paper Scissors+</strong></h1>

      <div className="mt-4">
        <Badge bg="primary" className="fs-5 my-3 me-3">You: {playerScore}</Badge>
        <Badge bg="secondary" className="fs-5 my-3 me-3">Computer: {computerScore}</Badge>
      </div>

      <Row className="justify-content-center mb-4">
        {choices.map((choice, idx) => (
          <Col key={idx} xs="auto">
            <Button
              variant={choice === 'rock' ? 'outline-primary' : choice === 'paper' ? 'outline-success' : 'outline-danger'}
              size="lg"
              onClick={() => play(choice)}
            >
              {choice === 'rock' ? '🪨' : choice === 'paper' ? '📄' : choice === 'scissors' ? '✂️' : choice === 'gun' ? '🔫' : choice === 'grenade' ? '💣' : choice === 'laser' ? '🔦' : ''}
            </Button>
          </Col>
        ))}
      </Row>

      {resultMessage && (
        <Alert variant={resultVariant}>
         {resultMessage}
        </Alert>
      )}


    </Container>
  );
}


