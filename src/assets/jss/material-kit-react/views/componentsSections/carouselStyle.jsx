import { container,title } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  title: {
    ...title,
    textAlign: 'center',
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  aboutMeText:{
    fontWeight: "200",
    fontSize: "24px",
    textAlign: "justify",
    lineHeight: 1.5,
  }
};

export default carouselStyle;
