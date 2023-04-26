import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import PageTitleView from '../components/PageTitleView';
import React, {useState} from 'react';
import LightTheme from '../common/LightTheme';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {emailValidator, passwordValidator} from '../core/utils';
import PPBTextInput from '../components/PPBTextInput';

const LoginScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const theStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const onLoginProcess = () => {
    console.log('onLoginProcess ----');
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      console.log('onLoginProcess emailError ----: ', emailError);
      console.log('onLoginProcess passwordError ----: ', passwordError);
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
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
          <PageTitleView title="Login" />
          <PPBTextInput
            title="Email"
            inputFieldStyle={styles.input}
            areaStyle={styles.inputAreaStyle}
            value={email.value}
            returnKeyType="next"
            onChangeText={text => setEmail({value: text, error: ''})}
            keyboardType="email-address"
            textContentType="emailAddress"
            errorText={email.error}
          />
          <PPBTextInput
            title="Password"
            inputFieldStyle={styles.input}
            areaStyle={styles.inputAreaStyle}
            value={password.value}
            returnKeyType="done"
            onChangeText={text => setPassword({value: text, error: ''})}
            secureTextEntry
            errorText={password.error}
          />
          <Button title="Login" onPress={onLoginProcess} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
