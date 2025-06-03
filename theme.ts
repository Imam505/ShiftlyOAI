export const palette = {
  // Core brand
  primary:    '#643cff',
  secondary:  '#212121',
  background: '#fcfcfc',
  surface:    '#ededed',
  // States
  success:    '#2ecc71',
  danger:     '#ff4c4c',
  // Text & border
  textPrimary:   '#212121',
  textSecondary: '#643cff',
  border:        '#ededed',
  onPrimary:     '#ffffff',
};

export const radius  = 14;
export const spacing = (n: number) => n * 4; // 4-pt grid

export const fonts = {
  regular: 'HelveticaNeue',
  medium:  'HelveticaNeue-Medium',
  bold:    'HelveticaNeue-Bold',
};

export const shadow = {
  depth1: {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
};
