import {PPBenTheme} from './PPBenTheme';
import {TextStyle} from 'react-native';

export interface ColourThemedMediaSource<T = PPBenTheme> {
  lightTheme: T;
  darkTheme?: T;
}
export const getColourThemedMediaSource = <T extends PPBenTheme>(
  isDarkMode: boolean,
  mediaSource: ColourThemedMediaSource<T>,
): T => {
  return isDarkMode && mediaSource.darkTheme
    ? mediaSource.darkTheme
    : mediaSource.lightTheme;
};

export const defaultTextStyles = (theme: PPBenTheme): TextStyle => ({
  color: theme.darkGrey,
  fontFamily: 'Gotham-Medium',
});
