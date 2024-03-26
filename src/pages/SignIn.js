import React from 'react'
import { Col, Container, Grid, IconButton, Panel, Row } from 'rsuite'
import { FaFacebook,FaGoogle } from 'react-icons/fa'
import { auth } from '../misc/firebase'
//import firebase from 'firebase/compat/app'
import { GoogleAuthProvider,FacebookAuthProvider,signInWithPopup } from 'firebase/auth'

const SignIn = () => {
  const facebookSignIn = async()=>{
    try {
      const result = await signInWithPopup(auth,new FacebookAuthProvider())
      console.log(result)
    } catch (error) {
      alert(error.message)
    }
  }
  const googleSignIn = async()=>{
    try {
      const result = await signInWithPopup(auth,new GoogleAuthProvider())
      console.log(result) 
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <Container>
        <Grid>
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              <Panel>
                <div style={{textAlign:'center'}}>
                  <h3>Sign in page for chatting app</h3>
                </div><br/>
                <div style={{textAlign:'center'}}>
                  <IconButton appearance='primary' color='blue' icon={<FaFacebook/>} onClick={facebookSignIn}>
                    Continue With Facebook
                  </IconButton><br></br><br></br>
                  <IconButton appearance='primary' color='green' icon={<FaGoogle/>} onClick={googleSignIn}>
                    Continue With Google
                  </IconButton>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
    </Container>
  )
}

export default SignIn
