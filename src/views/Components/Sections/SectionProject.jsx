import React from "react";
import classNames from "classnames";
import withStyles from "material-ui/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import projectStyle from "assets/jss/material-kit-react/views/componentsSections/projectStyle.jsx";
import vsCode from "assets/gifs/VSCode.gif";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import website from "assets/gifs/website.gif"
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

                    <a href="https://github.com/lorenzo2897/vscode-ipe" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className={classes.socialsGitHub + " fab fa-github"} />
                    </a>
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://www.youtube.com/watch?v=amuV0z9eVg4" target="_blank" rel="noopener noreferrer" title="Youtube">
                      <i className={classes.socialsYoutube + " fab fa-youtube"} />
                    </a>
                  </IconButton>

                  <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" title="Angular">
                    <i style={{ fontSize: 100 }} class="devicon-angularjs-plain-wordmark colored"></i>
                  </a>

                  <a href="https://code.visualstudio.com/docs/editor/whyvscode" target="_blank" rel="noopener noreferrer" title="VS Code">
                    <i style={{ fontSize: 100, position: "relative", left: 10 }} class="devicon-visualstudio-plain-wordmark colored"></i>
                  </a>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={website} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  louiskueh.com
                  <br />
                  <small className={classes.smallTitle}>A material design porfolio developed from ground up</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    With over <b>140</b> commits and counting this project has been worked on since the start of 2018. You can also view my previous website
                    <a href="https://louiskueh.com/oldWebsite" target="_blank" rel="noopener noreferrer" title="Old Website"> here </a>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/jovanhan2.github.io" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className={classes.socialsGitHub + " fab fa-github"} />
                    </a>
                  </IconButton>
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="Angular">
                    <i style={{ fontSize: 40,position: "relative", right: 4  }} class="devicon-react-original-wordmark colored"></i>
                  </a>
                  <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" title="Angular">
                    <i style={{ fontSize: 40}} class="devicon-nodejs-plain colored"></i>
                  </a>
                  <a href="https://travis-ci.org/" target="_blank" rel="noopener noreferrer" title="Angular">
                    <i style={{ fontSize: 40,position: "relative", left: 7  }} class="devicon-travis-plain-wordmark colored"></i>
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
                  2D platformer
                  <br />
                  <small className={classes.smallTitle}>Developed in Unity</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    My first project on game development. Includes animations, jumping, collisions and scoring.
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
                  Compiler
                  <br />
                  <small className={classes.smallTitle}>C++ to MIPS compiler</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Individually built a C++ compiler from ground up: From Lexing to Code Generation
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/Compiler-Cpp" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className={classes.socialsGitHub + " fab fa-github"} />
                    </a>
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
