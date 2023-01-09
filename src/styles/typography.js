export const fonts = {
    primary: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    secondary: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  };



  export const typography = {
    text: {
        xxs: `
      font-size: 0.625rem;
      line-height: 1rem;
      `,
      xs: `
      font-size: 0.75rem;
      line-height: 1rem;
      `,
      sm: `
      font-size: 0.875rem;
      line-height: 1.25rem;
      `,
      md: `
      font-size: 1rem;
      line-height: 1.5rem;
      `,
      lg: `
      font-size: 1.125rem;
      line-height: 1.75rem;
      `,
      xl: `
      font-size: 1.25rem;
      line-height: 1.75rem;
      `,
    },
    head: {
      xs: `
      font-size: 1.25rem;
      line-height: 1.75rem;
      `,
      sm: `
      font-size: 1.5rem;
      line-height: 2rem;
      `,
      md: `
      font-size: 2.25rem;
      line-height: 3rem;
      `,
      lg: `
      font-size: 3rem;
      line-height: 4rem;
      `,
      xl: `
      font-size: 4rem;
      line-height: 5.5rem;
      `,
      xxl: `
      font-size: 6rem;
      line-height: 8rem;
      `,
    },
  };
  
  for (const size in typography.text) {
    typography.text[size] += `
    font-family: ${fonts.primary};
    `;
  }
  
  for (const size in typography.head) {
    typography.head[size] += `
    font-family: ${fonts.secondary};
    font-weight: 600;
    `;
  }
  