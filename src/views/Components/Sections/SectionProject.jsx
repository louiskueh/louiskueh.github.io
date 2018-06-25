import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import projectStyle from "assets/jss/material-kit-react/views/componentsSections/projectStyle.jsx";
import vsCode from "assets/gifs/VSCode.gif";
import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import { Icon } from "material-ui";

class SectionProject extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        {/* <h2 className={classes.title}>Here is our team</h2> */}
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={vsCode} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Visual Studio Code Extension: Neon
                  <br />
                  <small className={classes.smallTitle}>Designed for data scientists</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A robust extension that combines the rich features Visual Studio Code with the interactivity of Jupyter Notebooks
                  </p>

                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                  
                  <a href="https://github.com/lorenzo2897/vscode-ipe" target="_blank" title="Github">
                   <i className={classes.socialsGitHub + " fab fa-github"} />
                   </a>
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                  <a href="https://www.youtube.com/watch?v=amuV0z9eVg4" target="_blank" title="Youtube">
                  <i className={classes.socialsYoutube + " fab fa-youtube"} />
                  </a>
                </IconButton>
              
                <a href="https://angular.io/" target="_blank" title="Angular">
                <i style={{fontSize:100}} class="devicon-angularjs-plain-wordmark colored"></i>
                </a>

                <a href="https://code.visualstudio.com/docs/editor/whyvscode" target="_blank" title="VS Code">
                <i style={{fontSize:100,position:"relative",left:10}}class="devicon-visualstudio-plain-wordmark colored"></i>
                </a>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Christian Louboutin
                  <br />
                  <small className={classes.smallTitle}>Designer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Kendall Jenner
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-instagram"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-facebook"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(projectStyle)(SectionProject);
