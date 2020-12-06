import React, {Component} from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

class HomePage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text}/>
                <Carousel/>
            </div>
        );
    }

}

export default HomePage