import { Container, Row, Col, Image, Card, Button, Form } from "react-bootstrap"

import "./Home.css"
export default function Home(){
    return (
        <>
            <div id="bg1" className="background">
                <Container fluid="xxl">
                    <Row>
                        <Col xs={12} md={6}>
                            <Row className="mt-6">
                                <Col xs={12}>
                                    <h1>FullStack<br/>Developer</h1>
                                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia sit? Dolore </h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia sit? Dolore
                                    </p>
                                </Col>
                                <Col xs={6}>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia sit? Dolore
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            image goes here
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="bg2" className="background">
                <Container fluid="xxl">
                    <Row>
                        <Col xs={12} md={6}>
                            <Row className="mt-6">
                                <h1>Ttile 1</h1>
                                <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora modi enim. Nostrum aliquid quibusdam ratione expedita perferendis iure ipsum, incidunt consequuntur assumenda amet, deserunt earum dolorem dolore sequi quos.
                                </p>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="mt-6">
                                <h1>title 2</h1>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem aspernatur voluptatum placeat nisi architecto neque quasi recusandae inventore, sequi quos quo totam temporibus accusamus repellat pariatur. Distinctio, ratione nam?
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="bg3" className="background">
                <Container fluid="xxl">
                    <Row className="pt-6">
                        <Col xs={12} md={4} className="mb-5">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="mb-5">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="mb-5">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="bg4" className="background">
            <Container fluid="xxl">
                <Row className="justify-content-center pt-6">
                    <Col xs={12} md={5}>
                        <h1>Title</h1>
                        <h3>long subtitle being descriptive</h3>
                    </Col>
                </Row>
                    <Form>
                        <Row className="justify-content-center">
                            <Col xs={12} md={3}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={3}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={6} md={4}>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg">
                                        Block level button
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
            </Container>
            </div>
        </>
    )
}