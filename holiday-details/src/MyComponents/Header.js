import React from 'react'
import { Button, Typography } from 'antd';
const { Title } = Typography;


export const Header = () => {

    let btnStyle = {
        top: "10px",  
    }
    return (
        <div>
             <Button type="primary" style={btnStyle}>View Events</Button><br/><br/>
             <Title level={3}>Holiday Details</Title>
        </div>
    )
}
