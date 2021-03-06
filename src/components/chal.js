import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Chal () {
    return (
        <Container style={{marginTop:'2rem'}}>
        <Row>
            <Col 
            xs={12}
            md={12}
            style={{background:'#ffba00',
                    color:'#fff',
                    padding:'1rem',
                    textAlign:'center'}}>
            <p>READY TO GROW YOUR DIGITAL PRESENCE?</p>
            </Col>
            <Col
            xs={12}
            md={12}
            style={{marginTop:'-1.5rem', textAlign:'center'}}>
            <a href='https://wa.me/6281219013721?text=Nama+Anda%3A+'>
            <Button variant="warning" style={{border:'3px solid #fff'}}>
            HUBUNGI KAMI
            </Button>
            </a>
            </Col>
        </Row>
        </Container>
    )
}
export default Chal;