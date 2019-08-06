import React, {useState} from 'react';
import './App.css'
import { Button, Row, Container, Col } from 'reactstrap'

function App() {
  const [number, setNumber] = useState('')

  const concate = (n) => {
    setNumber(number + n)
    return number
  }
  const bksp = () => {
    setNumber(number.slice(0,- 1))
  }
  const clear = () => {
    setNumber('')
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div className='panel'>{`${number}`}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={clear}>C</Button>
          </Col>
          <Col>
            <Button onClick={bksp}>BKSP</Button>
          </Col>
          <Col>
            <Button>%</Button>
          </Col>
          <Col>
            <Button>/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => concate('7')}>7</Button>
          </Col>
          <Col>
            <Button onClick={() => concate('8')}>8</Button>
          </Col>
          <Col>
            <Button onClick={() => concate('9')}>9</Button>
          </Col>
          <Col>
            <Button>X</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => concate('4')}>4</Button>
          </Col>
          <Col>
            <Button onClick={() => concate('5')}>5</Button>
          </Col>
          <Col>
            <Button onClick={() => concate('6')}>6</Button>

          </Col>
          <Col>
            <Button>-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => concate('1')}>1</Button>
          </Col>
          <Col>
            <Button onClick={() => concate('2')}>2</Button>
          </Col>
          <Col>
            <Button onClick={() => concate('3')}>3</Button>
          </Col>
          <Col>
            <Button>+</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>?</Button>
          </Col>
          <Col>
            <Button onClick={() => concate('0')}>0</Button>
          </Col>
          <Col>
            <Button>?</Button>
          </Col>
          <Col>
            <Button>=</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
