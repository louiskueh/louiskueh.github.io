import { container, title } from "assets/jss/material-kit-react.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

const typographyStyle = {
  section: {
    padding: "0px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
   title: {
    ...title,
    textAlign: 'center',
    marginTop: "0x",
    marginBottom: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    paddingLeft: "15%",
    paddingRight:"15%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: "#c0c1c2",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "16px",

  },
  text:{
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
