const colors = {
  white: "#fff",
  lightGreen: "#F5F7F1",
  midGreen: "#DEE0DB",
  green: "#71903F",
  lighterGray: "#A3AA97",
  gray: "#6D7461",
  black: "#2F3A1D",
  grad1: "#92AA69",
  grad2: "#66862F",
}
const heading = {
  color: "heading",
  fontFamily: "body",
  fontWeight: "bold",
  lineHeight: "heading",
  my: 0,
}
export default {
  colors: {
    ...colors,
    background: colors.white,
    primary: colors.green,
    text: colors.gray,
    heading: colors.black,
  },
  fonts: {
    body: "DM Sans, Helvetica, sans-serif",
  },
  fontSizes: [".825rem", "1rem", "1.25rem", "1.5rem", "2rem"],
  fontWeights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  lineHeights: {
    body: "1.7",
    heading: "1.2",
  },
  spaces: [
    "0rem",
    ".25rem",
    ".5rem",
    "1rem",
    "2rem",
    "4rem",
    "8rem",
    "16rem",
    "32rem",
  ],
  styles: {
    root: {
      bg: "background",
      color: "text",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
      ul: {
        m: 0,
        ml: 1,
        p: 0,
      },
      ol: {
        m: 0,
        ml: 1,
        p: 0,
      },
      li: {
        m: 0,
        ml: 3,
        p: 0,
      },
      p: {
        m: 0,
        p: 0,
        mb: 4,
      },
    },
  },
  buttons: {
    primary: {
      py: 2,
      px: 4,
      borderRadius: "4px",
      fontWeight: "medium",
      letterSpacing: ".5px",
      background: theme =>
        `linear-gradient(to right, ${theme.colors.grad1}, ${theme.colors.grad2})`,
      color: "background",
      opacity: ".95",
      transition: "opacity .2s",
      "&:hover": {
        opacity: 1,
      },
    },
    blank: {
      py: 2,
      px: 0,
      background: "none",
      fontWeight: "medium",
      letterSpacing: ".5px",
    },
  },
  cards: {
    primary: {
      borderRadius: ".5rem",
      bg: "background",
      p: 4,
      boxShadow: "0 5px 25px rgba(0,0,0,0.05), 0 2px 7px rgba(0,0,0,0.05)",
    },
  },
  links: {
    underline: {
      color: "text",
      borderBottom: theme => `2px solid ${theme.colors.text}`,
      opacity: ".9",
      fontWeight: "medium",
      transition: "opacity .2s",
      "&:hover": {
        opacity: 1,
      },
    },
    blank: {
      textDecoration: "none",
      color: "inherit",
    },
  },
  text: {
    h1: { ...heading, fontSize: 4, fontWeight: "bold" },
    h2: { ...heading, fontSize: 3 },
    h3: { ...heading, fontSize: 2 },
    h4: { ...heading, fontSize: 1 },
    h5: { ...heading, fontSize: 0 },
    label: {
      fontSize: 1,
      // textTransform: "uppercase",
      color: "lighterGray",
      // fontWeight: "medium",
    },
  },
}
