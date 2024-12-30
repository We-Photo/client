import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// 화면 크기
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icon.png')} // 로컬 이미지 경로
        style={styles.icon}
      />
      <Text style={styles.text}>We Photo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,  // 화면의 너비
    height: height, // 화면의 높이
    backgroundColor: 'white',
  },
  icon: {
    width: 100,  // 아이콘의 크기 조정
    height: 100,
    marginBottom: 20, // 아이콘과 텍스트 간의 간격
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
