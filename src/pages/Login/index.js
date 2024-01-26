/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconPress = iconName => {
    alert(iconName);
    setSelectedIcon(iconName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewWrapper1}>
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle2}>Hello Again!</Text>
          <Text style={styles.textStyle3}>
            Welcome back, you have been missed!
          </Text>
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} placeholder="Username" />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.viewWrapper2}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => alert('Login button pressed')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle1}>Don't have an account? Sign in</Text>
        <View style={styles.iconImageContainer}>
          <IconImg
            urlPhoto="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
            onPress={() => handleIconPress('Google')}
          />
          <IconImg
            urlPhoto="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
            onPress={() => handleIconPress('Facebook')}
          />
          <IconImg
            urlPhoto="https://9to5mac.com/wp-content/uploads/sites/6/2019/09/Twitter.jpg?quality=82&strip=all&w=1600"
            onPress={() => handleIconPress('Twitter')}
          />
        </View>
      </View>
    </View>
  );
};

const IconImg = ({urlPhoto, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.iconImage} source={{uri: urlPhoto}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  viewWrapper1: {flex: 2},
  viewWrapper2: {flex: 1},
  textWrapper: {alignItems: 'center'},
  textInputWrapper: {
    borderRadius: 12,
    marginTop: 25,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
  },
  textInput: {
    color: 'black',
  },
  textStyle1: {
    marginTop: 20,
    color: 'blue',
  },
  textStyle2: {
    fontSize: 30,
    color: 'black',
    marginBottom: 5,
  },
  textStyle3: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#6214FF',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    margin: 15,
  },
  iconImageContainer: {
    flexDirection: 'row',
  },
});

export default Login;
