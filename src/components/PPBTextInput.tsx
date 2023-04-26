import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {theme} from '../core/theme';
type PPBTextInputProps = React.ComponentProps<typeof TextInput> & {
  title: string;
  areaStyle?: ViewStyle;
  maxLengthInputField?: number;
  inputFieldStyle?: {};
  titleStyle?: ViewStyle;
  errorText?: string;
};

const PPBTextInput = (props: PPBTextInputProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.inputAreaStyle, props.areaStyle]}>
      <Text
        style={[
          styles.inputTitle,
          props.titleStyle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {props.title}
      </Text>
      <TextInput
        style={[
          styles.inputField,
          props.inputFieldStyle,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
        maxLength={props.maxLengthInputField}
        selectionColor={theme.colors.primary}
        {...props}
      />
      {props.errorText ? (
        <Text style={styles.error}>{props.errorText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default PPBTextInput;
