const theme = {
  /* Variables */
  font: 'Arial',
  colors: {
    white: '#fff',
    grayLight: '#ebebeb',
    black: '#000'
  },
  mq: {
    'mobile-small': '320px',
    'mobile-medium': '375px',
    'mobile-large': '414px',
    'mobile': '639px',
    'tablet': '768px',
    'desktop': '1024px',
    'desktop-small': '1280px',
    'desktop-medium': '1440px',
    'desktop-big': '1680px',
    'desktop-large': '1920px'
  },
  
  /* Mixins */
  hide: `
    opacity: 0;
    visibility: hidden;
  `,
  show: `
    opacity: 1;
    visibility: visible;
  `,
  
  /* Functions */
  minScreen: (mq, style) => `
    @media (min-width: ${theme.mq[mq]}) {
      ${style}
    }
  `,
  maxScreen: (mq, style) => `
    @media (max-width: ${theme.mq[mq]}) {
      ${style}
    }
  `,
}

export default theme;