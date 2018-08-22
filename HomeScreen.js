import React from "react";
import { 
    View,
    Text, 
    StyleSheet,
    FlatList 
} from "react-native";

import { Video } from "react-native-video";
import axios from 'axios'
//import video from "./sample_iTunes.mov";

export default class HomeScreen extends React.Component {

  constructor(props){
      super(props);
      
      this.state = {
        ebookList: []
      }
      
  }

  async componentDidMount() {
    console.log("did mount");
    try {
      const res = await axios.get(
        "https://www.geniusplaza.com/apiprek?language=1&ageGroup=4"
      );

      const titles = res.data.results.ebooks.map(el => {
        return {
          title: el.title,
          id: el.id,
          icon: "https://www.geniusplaza.com/"+el.icon
        };
      });
      console.log(titles);
      this.setState({ ebookList: titles });
    } catch (err) {
      console.log(err);
    }
  }

  goToLogin = () => {
    this.props.navigation.navigate("LogIn");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Welcome to Genius Plaza</Text>
          <Text style={styles.descriptionText}>
            Ignite the genius in every child!
          </Text>
        </View>
        <FlatList style={styles.flatListStyle}
         data={this.state.ebookList}
         renderItem={
            ({item}) => (
              <Text>{item.title}</Text>
            )
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
    
  },

  header: {
    justifyContent: 'flex-start',
    backgroundColor: "#3498db",
    height: "30%",
    width: "100%",
  },

  textStyle: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center"
  },

  descriptionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center"
  },

  flatListStyle: {
      backgroundColor: 'purple',
      width: '100%',
      alignSelf: 'center',
      margin:10
  }

});
