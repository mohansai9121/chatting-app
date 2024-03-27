import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Container, Grid, Panel, Row } from 'rsuite'
import '../styles/styles.scss'
import Navigation from './Navigation'

const Home = () => {
  return (
    <div>
      <Container>
        <Grid>
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              <Panel>
                <div style={{textAlign:'center'}}>
                  <br></br>
                  <Navigation/>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
      <Outlet/>
    </div>
  )
}

export default Home