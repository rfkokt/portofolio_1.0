import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Footers from "./components/Footers";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "RDev",
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/about'},
                {title: 'Contact', path: '/contact'},
            ],
            home: {
                title: 'Be Relentless',
                subTitle: 'Project the make a difference',
                text: 'Checkout my Projects below'
            },
            about: {
                title: 'About Me',
            },
            contact: {
                title: 'Let\'s Talk',
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand={"lg"}>
                        <Navbar.Brand>RDev</Navbar.Brand>
                        <Navbar.Toggle className={"border-0"} aria-controls="navbar-toggle"/>
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <div className="mr-2 nav-link">
                                    <Link to="/"> Home</Link>
                                </div>
                                <div className="mr-2 nav-link">
                                    <Link to="/about"> About</Link>
                                </div>
                                <div className="mr-4 nav-link">
                                    <Link to="/contact"> Contact</Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path={"/"} exact
                           render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}
                                                   text={this.state.home.text}/>}/>
                    <Route path={"/about"} exact
                           render={()=> <AboutPage  title={this.state.about.title}/>}/>
                    <Route path={"/contact"} exact
                           render={()=><ContactPage title={this.state.contact.title}/>}/>
                    <Footers/>
                </Container>
            </Router>
        );
    }

}

export default App;
