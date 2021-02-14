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

import vsCode from "assets/gifs/VSCode.gif";
import unityPlatformer from "assets/gifs/Unity2Dplatformer.gif";
import spotifyImage from "assets/gifs/spotify.gif";
import quiz from "assets/gifs/quiz.gif";
import studentfinance from "assets/gifs/studentfinanceWebsite.gif";
// import vsCodeHackbooth from "assets/img/hackbooth.jpg"
import Interactive from "react-interactive";
// import LocationOn from "@material-ui/icons/LocationOn";
import Tooltip from "material-ui/Tooltip";
class SectionCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const imageHeight = 559;
    const imageWidth = 1200;
    const { classes } = this.props;
    const settings = {
      height: 10,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    const { width } = this.state;
    const isMobile = width <= 1000;
    if (!isMobile) {
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
                      <Tooltip
                        id="github"
                        title="Follow me on Github"
                        placement={window.innerWidth > 959 ? "top" : "left"}
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <img
                          src={vsCode}
                          width={imageWidth}
                          height={imageHeight}
                          alt="First slide"
                          className="slick-image"
                        />
                      </Tooltip>
                    </div>
                    <div>
                      <img
                        src={quiz}
                        width={imageWidth}
                        height={imageHeight}
                        alt="Thid slide"
                        className="slick-image"
                      />
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
                          <i
                            className={
                              classes.socialIcons + " fab fa-github fa-2x"
                            }
                          />
                          <Interactive
                            as="a"
                            href="https://github.com/jovanhan2/Simple2DPlatformer"
                            target="_blank"
                            normal={{ color: "white" }}
                            // mouse interactions: normal -> hover -> hoverActive
                            hover={{ color: "#3062D5" }}
                            hoverActive={{ color: "#031C57" }}
                          >
                            &nbsp;&nbsp;2D platformer game (Unity)
                          </Interactive>
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
    } else {
      return (
        <div>
          <div className={classes.section}>
            <div className={classes.container}>
              <div className={classes.title}>
                <h1>Projects</h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
