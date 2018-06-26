import React from "react";
// react component for creating beautiful carousel
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";


class SectionAboutMe extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>About Me</h1>
            </div>
            <div className={classes.aboutMeText}>
            Experienced student with a demonstrated history of working in technology. Skilled in Object Oriented Programming, C++, Java, SQL, Angular, React, HTML/CSS.  <br />  <br /> Strong education professional with a Master’s Degree focused in Electronic and Information Engineering from Imperial College London (2015 - 2019).
                
            </div>
      
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionAboutMe);
