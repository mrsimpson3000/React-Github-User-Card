import React from "react";
import { Card, CardHeader, CardText, CardBody, Col } from "reactstrap";

export default function UserCard(props) {
  // console.log(`name: ${props.user.login}`);
  return (
    <Col md={{ size: 6, offset: 3 }}>
      <Card className='bg-danger text-center'>
        <CardBody>
          <CardHeader className='bg-primary'>Master of All Users</CardHeader>
          <CardText className='text-light'>Name: {props.user.name}</CardText>
          <CardText className='text-light'>Blog: {props.user.blog}</CardText>
          <CardText className='text-light'>
            Location: {props.user.location}
          </CardText>
          <CardText className='text-light'>Email: {props.user.email}</CardText>
          <CardText className='text-light'>
            Public Repos: {props.user.public_repos}
          </CardText>
          <CardText className='text-light'>
            Followers: {props.user.followers}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
