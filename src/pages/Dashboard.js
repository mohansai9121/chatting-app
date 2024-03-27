import React, { useState } from 'react'
import { Sidenav, Nav, Toggle } from 'rsuite'

const Dashboard = () => {
    const [expanded, setExpanded] = useState(true)
    const [activeKey, setActiveKey] = useState('1')
  return (
    <div style={{width:240}}>
        <Toggle
            onChange={setExpanded}
            checked={expanded}
            checkedChildren='Expand'
            unCheckedChildren='Expand'
        /><hr/>
        <Sidenav expanded={expanded} defaultOpenKeys={['3','4']}>
            <Sidenav.Body>
                <Nav activeKey={activeKey} onSelect={setActiveKey}>
                    <Nav.Item eventKey='1'>Board</Nav.Item>
                    <Nav.Item eventKey='2'>User</Nav.Item>
                    <Nav.Menu placement='rightStart' eventKey='3' title='Advanced'>
                        <Nav.Item eventKey="3-1">Geo</Nav.Item>
                        <Nav.Item eventKey="3-2">Devices</Nav.Item>
                        <Nav.Item eventKey='3-3'>Event Depth</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu placement='rightStart' eventKey='4' title='Settings'>
                        <Nav.Item eventKey='4-1'>BackGround Colour</Nav.Item>
                        <Nav.Item eventKey='4-2'>Theme</Nav.Item>
                        <Nav.Item eventKey='4-3'>Delete Chat</Nav.Item>
                    </Nav.Menu>
                </Nav>
            </Sidenav.Body>
            <Sidenav.Toggle onToggle={expanded=>setExpanded(expanded)}/>
        </Sidenav>
    </div>
  )
}

export default Dashboard
