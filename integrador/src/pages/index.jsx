import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function Index() {
    return (
        <>
            <div className="carr">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/8b/45/8c/8b458cff3eaad5a21d9d1832812aa1c0.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/fb/65/3f/fb653f33573686fe25a1d9d16e03f8e1.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/cb/ba/8e/cbba8eabdaf1b348b7c47803e87db7c1.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container">
                <Carousel fade>
                    <Carousel.Item>
                        <CardGroup>
                            <Card className="card-item">
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_787221-MLA48007684849_102021-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$142.499</Card.Title>
                                    <Card.Text>
                                        Smart TV Samsung Series 7 UN55AU7000GCZB LED 4K 55" 220V - 240V
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card className="card-item">
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_973781-MLA48131216539_112021-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$53.999</Card.Title>
                                    <Card.Text>
                                        Monitor gamer Samsung F24T35 led 24" azul y gris oscuro 100V/240V
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card className="card-item">
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_765874-MLA47146197629_082021-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$34.999</Card.Title>
                                    <Card.Text>
                                        Tablet Samsung Galaxy Tab A7 Lite SM-T220 8.7" 32GB gris y 3GB de memoria RAM
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card className="card-item">
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_693687-MLA52131317239_102022-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$21.812</Card.Title>
                                    <Card.Text>
                                        Taladro Atornillador Daewoo Inalambrico 18v Kit Bosch Maleti
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card className="card-item">
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_879170-MLA45629747467_042021-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$185.147</Card.Title>
                                    <Card.Text>
                                        Notebook Lenovo IdeaPad 14IIL05 platinum gray 14", Intel Core i5 1035G1 8GB de RAM 512GB SSD
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </Carousel.Item>

                    <Carousel.Item>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_819710-MLA51839566017_102022-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$54.999</Card.Title>
                                    <Card.Text>
                                        Notebook Cx Cx25000w Iron Gray 11.6 Hd , Intel Celeron N3350 4gb De Ram 64gb Ssd, Windows 10 Pro
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_620605-MLA32691559317_102019-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$11.999</Card.Title>
                                    <Card.Text>
                                        Google Chromecast 3.ª Generación Full Hd Carbón
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_737913-MLA49433851234_032022-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$45.300</Card.Title>
                                    <Card.Text>
                                        Celular Samsung Galaxy A03 128 Gb Negro 4 Gb Ram
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_825942-MLA40349329243_012020-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$69.947</Card.Title>
                                    <Card.Text>
                                        Sommier Springwall MCB115/MSX118 2 plazas de 190cmx140cm gri
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_Q_NP_981490-MLA51669987543_092022-AB.webp" />
                                <Card.Body>
                                    <Card.Title>$11.899</Card.Title>
                                    <Card.Text>
                                        Ventilador De Pie 20 Pulgadas Con 3 Velocidades Blanco 95w
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container">
                <Card className="bg-dark text-white">
                    <Card.Img src="https://i.pinimg.com/originals/cb/ba/8e/cbba8eabdaf1b348b7c47803e87db7c1.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22537%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20537%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18477c8cebf%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A27pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18477c8cebf%22%3E%3Crect%20width%3D%22537%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22202.015625%22%20y%3D%2294.4%22%3E537x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}