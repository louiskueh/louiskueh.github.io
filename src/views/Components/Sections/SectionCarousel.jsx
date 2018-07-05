import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

import image1 from "assets/gifs/VSCode.gif";
import unityPlatformer from "assets/gifs/Unity2Dplatformer.gif";
import game2048 from "assets/gifs/2048.gif";
import vsCodeHackbooth from "assets/img/hackbooth.jpg"
import Interactive from 'react-interactive';
import LocationOn from "@material-ui/icons/LocationOn";
class SectionCarousel extends React.Component {
  render() {
    const imageHeight = 559
    const imageWidth = 1200
    const { classes } = this.props;
    const settings = {
      height: 10,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Projects</h1>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      width={imageWidth}
                      height={imageHeight}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4 className={classes.carouselText}>
                        <i className={classes.socialIcons + " fab fa-github fa-2x"} />
                        <Interactive
                          as="a"
                          href="https://github.com/lorenzo2897/vscode-ipe"
                          target="_blank"
                          normal={{ color: 'white' }}

                          // mouse interactions: normal -> hover -> hoverActive
                          hover={{ color: '#00cc66' }}
                          hoverActive={{ color: '#006600' }}
                        >
                          &nbsp;&nbsp;VS Code extension built in collaboration with Microsoft
                        </Interactive>


                        {/* <a href="https://github.com/lorenzo2897/vscode-ipe" style={styles.link}>VS Code extension built in collaboration with Microsoft</a> */}
                      </h4>
                    </div>

                  </div>
                  <div>
                    <img
                      src={vsCodeHackbooth}
                      width={imageWidth}
                      height={imageHeight}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4 className={classes.carouselText}>
                        <i className={classes.socialIcons + " fab fa-github fa-2x"} />
                        <div className="slick-caption">
                          <LocationOn className="slick-icons" />Hackbooth Demonstration, Imperial College London
                    </div>

                      </h4>
                    </div>

                  </div>
                  <div>
                    <img
                      src={unityPlatformer}
                      width={imageWidth}
                      height={imageHeight}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <i className={classes.socialIcons + " fab fa-github fa-2x"} />
                        <Interactive
                          as="a"
                          href="https://github.com/jovanhan2/Simple2DPlatformer"
                          target="_blank"
                          normal={{ color: 'white' }}

                          // mouse interactions: normal -> hover -> hoverActive
                          hover={{ color: '#3062D5' }}
                          hoverActive={{ color: '#031C57' }}
                        >
                          &nbsp;&nbsp;2D platformer game (Unity)
                        </Interactive>

                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={game2048}
                      width={imageWidth}
                      height={imageHeight}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <LocationOn className="slick-icons" />Hackbooth Demonstration, Imperial College London
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
