import React, { useState } from 'react'
import { Container, Row, Col ,Button } from 'reactstrap'
import {Link} from "react-router-dom"
import "../styles/thank-you.css"





const ticketNumberGenerator = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const randomLetter = Math.floor(Math.random() * letters.length);
  const numbers = Math.floor(Math.random() * 100000);
  return letters[randomLetter].toUpperCase() + numbers;
};




const ThankYou = () => {

const [ticketNumber,setTicketNumber] = useState('');

const generateTicket = () =>{
  const newTicketNumber = ticketNumberGenerator();
  setTicketNumber(newTicketNumber)
}



  return <section>
    <Container>
        <Row> 
            <Col lg='12' className="pt-5 text-center">
            <div className='thank__you'>
                <span><i class="ri-checkbox-circle-line"></i></span>
                <h1 className='mb-3 fw-semibold'>Thank You</h1>
                <h3 className='mb-4'> Your Tour is Booked </h3>
                <button className='btn primary__btn w-25' onClick={generateTicket} style={{ padding: '10px 20px', fontSize: '16px' }}>Generate Ticket Number</button>
              <h2>        
          Your Ticket Number: {ticketNumber}
          </h2>

  
                <Button className="btn primary__btn w-25">
                    <Link to="/home">Back to Home</Link>
                </Button>
            </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default ThankYou