import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: {
        coral: {
          5: string;
          50: string;
          100: string;
          200: string;
          300: string;
          400: string; // override
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
      };
      subPrimary: string;
      secondaryViolet: string;
      secondaryBlue: string;
      grayColor: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
      textColor: {
        100: string; // text primary
        200: string; // text secondary
      };
      textDisabled: string; // text, placeholder disabled
      error: string;
      white: string;
      black: string;
      kakao: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      big: string;
      lg: string;
    };
    fontWeight: {
      light: string;
      regular: string;
      semiBold: string;
      bold: string;
      bolder: string;
    };
  }
}
