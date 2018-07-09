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
import game2048 from "assets/gifs/2048.gif";
import website from "assets/gifs/website.gif"
import unityPlatformer from "assets/gifs/Unity2Dplatformer.gif";
import embeddedCW1 from "assets/img/tabletennis.png"
import embeddedCW2 from "assets/img/embeddedCW2.PNG"
import IBM from "assets/img/IBM.PNG"
import IBMLogo from "assets/img/IBM_logo.svg"
import compiler from "assets/img/compiler.png"
import studentfinance from "assets/gifs/studentfinanceWebsite.gif"
import graphics from "assets/img/graphics.PNG"
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
          <GridContainer >
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/lorenzo2897/vscode-ipe" target="_blank" rel="noopener noreferrer" title="VS Code IPE">
                    <img src={vsCode} alt="..." className={imageClasses} />
                  </a>
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
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" title="Angular">
                      <i className="devicon-angularjs-plain colored"></i>
                    </a>
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://code.visualstudio.com/docs/editor/whyvscode" target="_blank" rel="noopener noreferrer" title="VS Code">
                      <i className="devicon-visualstudio-plain colored"></i>
                    </a>
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/jovanhan2/jovanhan2.github.io" target="_blank" rel="noopener noreferrer" title="louiskueh.com">
                    <img src={website} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>

                  louiskueh.com

                <br />
                  <small className={classes.smallTitle}>A material design porfolio developed from ground up</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    With over <b>177</b> commits and counting this project has been worked on since the start of 2018. Also optimized for mobile.

                    {/* You can also view my previous website
                    <a href="https://louiskueh.com/oldWebsite" target="_blank" rel="noopener noreferrer" title="Old Website"> here </a> */}
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/jovanhan2.github.io" target="_blank" rel="noopener noreferrer" title="louiskueh.com">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="React">
                    <i style={{ fontSize: 40, position: "relative", right: 4 }} className="devicon-react-original-wordmark colored"></i>
                  </a>
                  <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" title="Node JS">
                    <i style={{ fontSize: 40 }} className="devicon-nodejs-plain colored"></i>
                  </a>
                  <a href="https://travis-ci.org/" target="_blank" rel="noopener noreferrer" title="Tavis CI">
                    <i style={{ fontSize: 40, position: "relative", left: 7 }} className="devicon-travis-plain-wordmark colored"></i>
                  </a>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="http://studentfinancetips.org/Imperial-College/" target="_blank" rel="noopener noreferrer" title="studentfinancetips.org">
                    <img src={studentfinance} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  studentfinancetips.org
                  <br />
                  <small className={classes.smallTitle}>My own personal brand  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A simple, no fuss blog designed in HTML,CSS and Bootstrap. Designed to give insight into student life and offer finance tips. You can view it
                    <a href="http://studentfinancetips.org/Imperial-College/" target="_blank" rel="noopener noreferrer" title="studentfinancetips.org"> here </a>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>

                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/studentblog" target="_blank" rel="noopener noreferrer" title="Student Blog">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer" title="HTML5">
                    <i style={{ fontSize: 40, position: "relative", right: 4 }} className="devicon-html5-plain-wordmark colored"></i>
                  </a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener noreferrer" title="CSS3">
                    <i style={{ fontSize: 40 }} className="devicon-css3-plain-wordmark colored"></i>
                  </a>
                  <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer" title="Bootstrap">
                    <i style={{ fontSize: 40, position: "relative", left: 7 }} className="devicon-bootstrap-plain-wordmark colored"></i>
                  </a>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://www.ibm.com/uk-en/" target="_blank" rel="noopener noreferrer" title="IBM">
                    <img src={IBM} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  IBM
                  <br />
                  <small className={classes.smallTitle}>Architecture Workshop</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Solved and presented original real-life architectural problems, coached by IBM mentors
                  </p>

                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://www.ibm.com/uk-en/" target="_blank" rel="noopener noreferrer" title="IBM">
                      <img style={{
                        width: "30px",
                        height: "10px"
                      }} src={IBMLogo} alt="..." />
                    </a>
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/jovanhan2/Simple2DPlatformer" target="_blank" rel="noopener noreferrer" title="Github">
                    <img src={unityPlatformer} alt="..." className={imageClasses} />
                  </a>
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
                    <a href="https://github.com/jovanhan2/Simple2DPlatformer" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" title="C #">
                      <i className="devicon-csharp-plain colored"></i>
                    </a>
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/jovanhan2/Internet-of-Things-Table-Tennis-Device" target="_blank" rel="noopener noreferrer" title="Github">
                    <img src={embeddedCW1} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>

                  IoT Table Tennis Device
                  <br />
                  <small className={classes.smallTitle}>Magnetometer, Triple-Axis Accelerometer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    An embedded system that offers feedback &amp; statistics for table-tennis techniques
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/Internet-of-Things-Table-Tennis-Device" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python">
                      <i className="devicon-python-plain colored"></i>
                    </a>
                  </IconButton>

                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/jovanhan2/Embedded-CW2" target="_blank" rel="noopener noreferrer" title="Github">
                    <img src={embeddedCW2} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Synchronous brushless motor
                  <br />
                  <small className={classes.smallTitle}>Thread management</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Utilize threads to maximize efficiency of motor, measured using a bitcoin mining hash rate.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/Embedded-CW2" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/Embedded-CW2/blob/master/Report.pdf" target="_blank" rel="noopener noreferrer" title="Report">
                      <i className={classes.socialsYoutube + " far fa-file-pdf"} />
                    </a>
                  </IconButton>
                </CardFooter>

              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/jovanhan2/Compiler-Cpp" target="_blank" rel="noopener noreferrer" title="Github">
                    <img src={compiler} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Compiler
                  <br />
                  <small className={classes.smallTitle}>C++ to MIPS compiler</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Individually built a C++ compiler from ground up: from Lexing to Code Generation
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/Compiler-Cpp" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                  {/* C++ Logo here  */}
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/jovanhan2/2048" target="_blank" rel="noopener noreferrer" title="Github">
                    <img src={game2048} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  2048
                  <br />
                  <small className={classes.smallTitle}>Based on the popular 2048 game </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Developed my own take of the 2048 game as one of my first programming projects
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/2048" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href=" https://github.com/jovanhan2/2048/blob/master/Design%20Choices.pdf" target="_blank" rel="noopener noreferrer" title="Report">
                      <i className={classes.socialsYoutube + " far fa-file-pdf"} />
                    </a>
                  </IconButton>

                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <a href="https://github.com/jovanhan2/raytracing" target="_blank" rel="noopener noreferrer" title="Github">
                    <img src={graphics} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Graphics
                  <br />
                  <small className={classes.smallTitle}>Developed ray tracing algorithm to display teapot</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Implemented a ray tracing algorithm to model how light travels in real life. (reflections, refractions, etc)
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <a href="https://github.com/jovanhan2/raytracing" target="_blank" rel="noopener noreferrer" title="Github">
                      <i className="devicon-github-plain colored"></i>
                    </a>
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>

        </div>
      </div >
    );
  }
}

export default withStyles(projectStyle)(SectionProject);
