const theme = {
  sizes: (step) => `${step * 8}px`,
  colors: {
    primary: "#d81159",
    secondary: "#73d2de",
    secondaryDark: "#32AEBE",
    primaryText: "#503b44",
    secondaryText: "#536B74",
    greyLight: '#FAFAFA',
    greyDark: '#E5E5E5'
  },
  fonts: {
    logo: 'Cookie',
    header: 'Courier New',
    main: 'Cantarell'
  },
  shadows: {
    high: ' 0  5px 10px rgba(154,160,185,0.05), 0 15px 40px rgba(166,173,201,0.2);'
  }
}

export default theme
