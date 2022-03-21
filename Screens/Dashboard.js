import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

var hw = require("../localdb.json");
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      homework: [],
    };
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.hwCard}>
        <View style={styles.dates}>
          <View style={styles.dateGiven}>
            <Text>Assigned : {item.dateGiven}</Text>
          </View>
          <View style={styles.submitDate}>
            <Text>Deadline : {item.submitDate}</Text>
          </View>
        </View>
        <View style={styles.subject}>
          <Text>Subject : {item.subject}</Text>
        </View>
        <View style={styles.homework}>
          <Text>Homework : {item.homework}</Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };
  keyExtractor = (item, index) => {
    index.toString();
  };
  // componentDidMount() {
  //   this.setState({
  //     homework: hw,
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeView} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>WorkTracker</Text>
        </View>
        <View style={styles.cardContainer}>
          <ScrollView style={styles.scroll}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={hw}
              renderItem={this.renderItem}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35,
  },
  titleContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#000",
  },
  dateGiven: {
    flex: 0.5,
  },
  cardContainer: {
    flex: 0.8,
    width: "95%",
  },
  submitDate: {
    flex: 0.5,
  },
  dates: {
    flexDirection: "row",
    flex: 0.3,
    marginBottom: 10,
  },
  hwCard: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  submit: {
    backgroundColor: "#007AFF",
    height: 30,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  submitText: {
    color: "white",
  },
  homework: {
    marginBottom: 10,
    marginTop: 10,
  },
});
