import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";

var hw = require("../localdb.json");
// var data = hw.readFileSync();
const fs = require("fs");
export default class EnterHomework extends Component {
  constructor() {
    super();
    this.state = {
      dateGiven: "",
      submitDate: "",
      subject: "",
      homework: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeView} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>WorkTracker</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Assigned date"
            onChangeText={(text) => {
              this.setState({
                dateGiven: text,
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Deadline date"
            onChangeText={(text) => {
              this.setState({
                submitDate: text,
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Subject"
            onChangeText={(text) => {
              this.setState({
                subject: text,
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Homework"
            onChangeText={(text) => {
              this.setState({
                homework: text,
              });
            }}
          ></TextInput>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              fs.writeFile(
                hw,
                JSON.stringify(this.state),
                function writeJSON(err) {
                  if (err) return console.log(err);
                  console.log(JSON.stringify(this.state));
                  console.log("writing to " + hw);
                }
              );
              var hw = require("../localdb.json");

              console.log(hw);
            }}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  formContainer: {
    flex: 0.8,
    alignItems: "center",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    marginBottom: 10,
    height: 40,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: "#007AFF",
    height: 45,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  submitText: {
    color: "white",
  },
});
