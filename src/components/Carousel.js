import React, {Component} from "react";
import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import github from '../assets/images/github-logo..jpg';
import Card from "./Card";
import {Container, Row} from "react-bootstrap";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'RDev',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://rifkidev.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCTq-tgRwMSyyOfn8MJA74CQ?view_as=subscriber',
                    selected: false
                },
                {
                    id: 2,
                    title: 'RDev Github',
                    subTitle: 'A social network for developers',
                    imgSrc: github,
                    link: 'https://github.com/rfkokt',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = !items[id].selected

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
                return <Card item={item} click={(e=> this.handleCardClick(item.id, e))} key={item.id}/>
            }
        )
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className={"justify-content-around"}>
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Carousel