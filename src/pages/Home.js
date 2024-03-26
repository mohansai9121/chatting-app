import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Grid, Panel, Row } from 'rsuite'
import '../styles/styles.scss'

const Home = () => {
  return (
    <div>
      <Container>
        <Grid>
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              <Panel>
                <div style={{textAlign:'center'}}>
                  <h2>Welcome to Chatting-app</h2>
                  <p>A progressive web app for chatting</p><br></br>
                  <Link to='/signIn' className='link'>SignIn</Link>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Home