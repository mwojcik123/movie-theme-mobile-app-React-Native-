interface Color {
  white: string;
  black: string;
  grey: string;
  red: string;
}

export const COLORS: Color = {
  white: '#EDEDED',
  black: '#171717',
  grey: '#444444',
  red: '#DA0037',
};
// colors from: https://colorhunt.co/palette/171717444444da0037ededed

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
  radius_50: number;
  radius_100: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
  radius_50: 50,
  radius_100: 100,
};

interface Size {
  size_4: number;
  size_8: number;
  size_12: number;
  size_18: number;
  size_22: number;
  size_28: number;
  size_32: number;
  size_50: number;
}

export const SIZES: Size = {
  size_4: 4,
  size_8: 8,
  size_12: 12,
  size_18: 18,
  size_22: 22,
  size_28: 28,
  size_32: 32,
  size_50: 50,
};

// PADDING AND MARGIN SIZES

interface MarginPadding {
  mp_2: number;
  mp_4: number;
  mp_8: number;
  mp_10: number;
  mp_12: number;
  mp_15: number;
  mp_18: number;
  mp_20: number;
  mp_24: number;
  mp_28: number;
  mp_32: number;
  mp_40: number;
}

export const MARGIN_PADDING: MarginPadding = {
  mp_2: 2,
  mp_4: 4,
  mp_8: 8,
  mp_10: 10,
  mp_12: 12,
  mp_15: 15,
  mp_18: 18,
  mp_20: 20,
  mp_24: 24,
  mp_28: 28,
  mp_32: 32,
  mp_40: 40,
};

interface Fonts {
  normal: string;
  bold: string;
  light: string;
  regular: string;
  thin: string;
}

export const FONTS = {
  normal: 'Montserrant-Black',
  bold: 'Montserrant-Bold',
  light: 'Montserrant-Light',
  regular: 'Montserrant-Regular',
  thin: 'Montserrant-Thin',
};
