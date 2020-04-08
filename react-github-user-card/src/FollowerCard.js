import React from "react";
import { Card, CardHeader, CardText, CardBody, Col } from "reactstrap";

export default function FollowerCard(props) {
  // console.log(`Props: ${props.follower[0]}`);
  return (
    <>
      {props.follower.map((follower, index) => (
        <Col key={index} md='4' className='mt-2 mb-2'>
          <Card className='bg-danger text-center'>
            <CardBody>
              <CardHeader className='bg-primary'>Simple Follower</CardHeader>
              <CardText className='text-light'>
                User Name: {follower.login}
              </CardText>
              <CardText className='text-light'>
                For more info on these simple followers feel free to copy and
                paste the following url: {follower.html_url}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}
