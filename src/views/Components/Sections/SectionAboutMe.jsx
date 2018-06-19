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
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

class SectionAboutMe extends React.Component {
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
    return (
      <div className={classes.section}>
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>About Me</h1>
            </div>
            <div>
            Experienced student with a demonstrated history of working in technology. Skilled in Object Oriented Programming, C++, Java, SQL, Angular, React, HTML/CSS. Strong education professional with a Master’s Degree focused in Electronic and Information Engineering from Imperial College London.
Currently seeking graduate opportunities in the technology sector (2018-2019).
                
            </div>
      
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionAboutMe);
