export interface Theme {
  colors: {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    elevation: {
      level0: string;
      level1: string;
      level2: string;
      level3: string;
      level4: string;
      level5: string;
    };
    surfaceDisabled: string;
    onSurfaceDisabled: string;
    backdrop: string;
  };
}

export const ProjectLightTheme: Theme = {
  colors: {
    primary: 'rgb(104, 71, 192)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(232, 221, 255)',
    onPrimaryContainer: 'rgb(33, 0, 93)',
    secondary: 'rgb(97, 91, 113)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(232, 222, 248)',
    onSecondaryContainer: 'rgb(29, 25, 43)',
    tertiary: 'rgb(125, 82, 96)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 217, 227)',
    onTertiaryContainer: 'rgb(49, 16, 29)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(28, 27, 30)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(28, 27, 30)',
    surfaceVariant: 'rgb(230, 224, 236)',
    onSurfaceVariant: 'rgb(72, 69, 78)',
    outline: 'rgb(121, 117, 127)',
    outlineVariant: 'rgb(202, 196, 207)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(49, 48, 51)',
    inverseOnSurface: 'rgb(244, 239, 244)',
    inversePrimary: 'rgb(206, 189, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(247, 242, 252)',
      level2: 'rgb(243, 237, 250)',
      level3: 'rgb(238, 231, 248)',
      level4: 'rgb(237, 229, 247)',
      level5: 'rgb(234, 226, 246)',
    },
    surfaceDisabled: 'rgba(28, 27, 30, 0.12)',
    onSurfaceDisabled: 'rgba(28, 27, 30, 0.38)',
    backdrop: 'rgba(50, 47, 56, 0.4)',
  },
};

export const ProjectDarkTheme: Theme = {
  colors: {
    primary: 'rgb(206, 189, 255)',
    onPrimary: 'rgb(57, 5, 144)',
    primaryContainer: 'rgb(80, 43, 167)',
    onPrimaryContainer: 'rgb(232, 221, 255)',
    secondary: 'rgb(203, 195, 220)',
    onSecondary: 'rgb(51, 45, 65)',
    secondaryContainer: 'rgb(73, 68, 88)',
    onSecondaryContainer: 'rgb(232, 222, 248)',
    tertiary: 'rgb(239, 184, 201)',
    onTertiary: 'rgb(73, 37, 50)',
    tertiaryContainer: 'rgb(99, 59, 73)',
    onTertiaryContainer: 'rgb(255, 217, 227)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(28, 27, 30)',
    onBackground: 'rgb(230, 225, 230)',
    surface: 'rgb(28, 27, 30)',
    onSurface: 'rgb(230, 225, 230)',
    surfaceVariant: 'rgb(72, 69, 78)',
    onSurfaceVariant: 'rgb(202, 196, 207)',
    outline: 'rgb(148, 143, 153)',
    outlineVariant: 'rgb(72, 69, 78)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(230, 225, 230)',
    inverseOnSurface: 'rgb(49, 48, 51)',
    inversePrimary: 'rgb(104, 71, 192)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(37, 35, 41)',
      level2: 'rgb(42, 40, 48)',
      level3: 'rgb(48, 45, 55)',
      level4: 'rgb(49, 46, 57)',
      level5: 'rgb(53, 50, 62)',
    },
    surfaceDisabled: 'rgba(230, 225, 230, 0.12)',
    onSurfaceDisabled: 'rgba(230, 225, 230, 0.38)',
    backdrop: 'rgba(50, 47, 56, 0.4)',
  },
};