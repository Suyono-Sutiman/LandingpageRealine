import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import Mess from "../components/for"

const SecondPage = () => (
  <Layout>
    <SEO title="Web Development" />
    <Jumbotron fluid className="hero dev">
      <Container>
              <h1 className='dpt' >Web</h1>
              <h1 className='dpt'>Development</h1>
              <p className='dpl'>Build a website with marketing in mind.</p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container style={{textAlign:'center'}} >
        <h4>Why Web Development & Design Matters</h4>
        <p>
        With our expertise and knowledge, we are able to build visually appealing, 
        high-quality WordPress websites that drive conversions to help grow your business. 
        We work closely with you to develop a deep understanding of your company’s goals 
        and industry in order to implement elements that will engage your visitors from 
        the moment they come on your site.
        </p>
        <h4>Our Process</h4>
        <Row style={{marginTop:'1rem', textAlign:'left'}} >
          <Col xs={12} md={4}>
            <h6>| Step 1</h6>
            <h5>Planning</h5>
            <p>
            First, we will sit down with you and your team to evaluate the current state of 
            your website. We will discuss your goals, and decide what needs to be done. 
            After this will develop a plan, in which we determine the structure and overall 
            aesthetic of your new site. 
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 2</h6>
            <h5>Implementation & Design</h5>
            <p>
            We start implementing the planned changes to your site and incorporating the new 
            design. During this process we will have revision rounds to ensure the best final result. 
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 3</h6>
            <h5>Delivery</h5>
            <p>
            Changes to the site will be published and the website will go live! We will continue to 
            monitor the performance of your site and make adjustments as needed to ensure optimal results. 
            </p>
          </Col>
        </Row>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default SecondPage
