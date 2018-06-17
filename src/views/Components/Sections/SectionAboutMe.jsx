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
            Experienced Instructor with a demonstrated history of working in the information technology and services industry. Skilled in C++, Java, Object Oriented Programming, Hardware Design, MIPS Instruction Set, and SQL. Strong education professional with a Master’s Degree focused in Electronic and Information Engineering from Imperial College London.

I love table tennis! I'm currently president of the Imperial College Table Tennis Club. I love playing my guitar, singing, meeting new people and learning new stuff.

Currently seeking summer internships in the technology sector.
                
            </div>
      
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionAboutMe);
