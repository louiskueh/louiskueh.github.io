import { container, title } from "assets/jss/material-kit-react.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

const typographyStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
   title: {
    ...title,
    textAlign: 'center',
    marginTop: "30px",
    marginBottom: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "16px",
    position: "absolute",
    width: "350px",
    left:"0px",
    top:"55px"
  },
  text:{
    display: "block",
    paddingLeft: "60px",
    position: "relative",
    top: "30px",
    textAlign: 'justify',
    fontSize:"14px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

  },
  marginLeft: {
    marginLeft: "auto !important"
  },
  iconSize:{
    fontSize:70
  },
  
  ...imagesStyles
};

export default typographyStyle;
