import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";

class Footers extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer className={"mt-5"}>
                <Container fluid={true}>
                    <Row className={"border-top justify-content-between p-3"}>
                        <Col className={'p-0'} md={3} sm={12}>
                            RDev
                        </Col>
                        <Col className={"p-0 d-flex justify-content-end"} md={3} sm={12}>
                            This site was made by RDev 💕.
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }

}

export default Footers