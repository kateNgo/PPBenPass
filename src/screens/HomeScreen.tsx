import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PageTitleView from '../components/PageTitleView';
import TextInput from '../components/PPBTextInput';

const HomeScreen = () => {
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
          <PageTitleView title="PPBen Pass App" />
          <TextInput
            title="Enter your Pin"
            maxLengthInputField={4}
            inputFieldStyle={styles.hiddenTextField}
          />
          <Button title="Login" />
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hiddenTextField: {
    zIndex: 10,
    backgroundColor: '#DEE3E5',
  },
  inputAreaStyle: {
    flex: 0.2,
    marginBottom: 10,
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  inputField: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
