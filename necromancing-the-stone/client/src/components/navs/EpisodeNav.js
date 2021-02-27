import React, { Fragment } from 'react';
import Slide from '../player/Slide';
import { Container, Row, Col } from 'react-bootstrap';

const EpisodeNav = () => {
  return (
    <Fragment>
        <Container fluid className='text-center'>
        <Row>
                <Col className='py-2'>1 of 1</Col>
            </Row>
            <Row>
                <Col className='py-5'>
                    <Slide/>
                </Col>
            </Row>
            <Row>
                <Col className='py-2'>3 of 3</Col>
            </Row>
        </Container>
    </Fragment>
  );
};

export default EpisodeNav;
