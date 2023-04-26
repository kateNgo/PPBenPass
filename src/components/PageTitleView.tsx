import {StyleSheet, Text, View, ViewStyle} from 'react-native';

export interface PageTitleViewProperty {
  title: string;
  titleStyle?: ViewStyle;
}

const PageTitleView = (props: PageTitleViewProperty): JSX.Element => {
  return (
    <View>
      <Text style={[styles.textStyle, props.titleStyle]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default PageTitleView;
