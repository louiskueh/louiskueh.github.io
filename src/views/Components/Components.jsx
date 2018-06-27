import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionExperience from "./Sections/SectionExperience.jsx";

import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionAboutMe from "./Sections/SectionAboutMe"
import SectionProject from "./Sections/SectionProject.jsx"
// import SectionAboutMe from "./Sections/SectionAboutMe.jsx"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import SectionActivities from "./Sections/SectionActivities";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Louis Kueh"
          rightLinks={<HeaderLinks />}
          fixed
          color="#000000"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/myBG.jpg")} >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={5} >
                <div className={classes.brand}>
                  <h1 className={classes.title}>Hi, I'm Louis</h1>
                  <h3 className={classes.subtitle}>
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionAboutMe />
          <SectionCarousel />
          <SectionProject />
          <SectionExperience/>
          <SectionActivities />
    
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
