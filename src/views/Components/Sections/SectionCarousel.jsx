import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

import image1 from "assets/gifs/VSCode.gif";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    const styles = {
      link: {
        color: "white",
        ":hover": {
          color: "red",
        },
      },
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
        <div className={classes.title}>
            <h1>Projects</h1>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={30} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4 className={classes.carouselText}>
                      <i className={classes.socialIcons + " fab fa-github fa-2x"} />  <a href="https://github.com/lorenzo2897/vscode-ipe" style={styles.link}>VS Code extension built in collaboration with Microsoft</a>
                      </h4>
                    </div>
            
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Somewhere Beyond,
                        United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Yellowstone
                        National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
