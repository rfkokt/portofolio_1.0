import React, {Component} from "react";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";

class Hero extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Jumbotron className={"bg-transparent jumbotron-fluid p-0"}>
                    <Container fluid={true}>
                        <Row className={"justify-content-center py-5"}>
                            <Col md={8} sm={12}>
                                <h1 className={"display-1 font-weight-bolder"}>{this.props.title}</h1>
                                <h3 className={"display-4 font-weight-light"}>{this.props.subTitle}</h3>
                                <h3 className={"lead font-weight-light"}>{this.props.text}</h3>
                            </Col>
                        </Row>
                    </Container>
            </Jumbotron>
        );
    }
}

export default Hero