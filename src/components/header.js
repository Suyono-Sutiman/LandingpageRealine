import { Link } from "gatsby"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container  from 'react-bootstrap/Container';

class Navi extends React.Component {
    state={className:'abu'};
    handleScroll=()=>{
        if (window.pageYOffset > 0) {
              this.setState({ className: "biru" });   
            }
        else{
              this.setState({ className: "abu" });
            }
        }
        componentDidMount(){
            window.addEventListener("scroll", this.handleScroll);
          }
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" fixed='top' className={this.state.className}>
                <Container>
              <Link to='/'>
            <Navbar.Brand>
              Realine.
            </Navbar.Brand>
              </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                  <Link to='/web-development/' className='nav-link'>
                    Development
                  </Link>
                  <Link to='/marketing/' className='nav-link'>
                    Marketing
                  </Link>
                  <Link to='/search-engine-optimization/' className='nav-link'>
                    SEO
                  </Link>
                  <Link to='/contact/' className='nav-link'>
                    Contact
                  </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}
export default Navi;
