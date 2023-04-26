import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Button,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import PageTitleView from '../components/PageTitleView';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LightTheme from '../common/LightTheme';
import PPBTextInput from '../components/PPBTextInput';

export interface NewEntryScreenProps {}
const NewEntryScreen = (props: NewEntryScreenProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const theStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={[theStyle, styles.container]}>
          <PageTitleView title="New Entry Form" />
          <PPBTextInput
            title="Entry Name"
            inputFieldStyle={styles.input}
            areaStyle={styles.inputAreaStyle}
          />
          <PPBTextInput title="Username" />
          <PPBTextInput title="Password" />
          <Button title="Create" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  inputAreaStyle: {
    width: '100%',
  },
  input: {
    textAlign: 'left',
    backgroundColor: LightTheme.clearBlue,
  },
});
export default NewEntryScreen;
