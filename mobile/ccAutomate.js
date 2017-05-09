import React, {Component} from 'react';
import {Text, AppRegistry, View, Picker, Button} from 'react-native';
import Style from './stylesheets/home';

class ccAutomate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "",
      interval: "",
      count: "",
      start: ""
    };
    this.dateParser = this.dateParser.bind(this);
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleClick);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleClick);
  }

  
  dateParser(date, frequency) {
    let inputDate = date;
    switch (frequency) {
      case 'now':
        return 'now';
      case 'nearestHr':
        inputDate.setHours(inputDate.getHours() + 1);
        inputDate.setMinutes(0); 
        inputDate.setSeconds(0);
        return inputDate;
      case 'default':
        if ((inputDate.getHours + 1) % 6 === 0 ){
          inputDate.setHours(inputDate.getHours()); 
        } else {
          inputDate.setHours(inputDate.getHours() + 1);
        }
        inputDate.setMinutes(0); 
        inputDate.setSeconds(0);
        inputDate.setHours(Math.floor(inputDate.getHours() / 6 + 1) * 6);
        return inputDate;
      case 'custom':

        return inputDate;
      default:
    }
  }
  handleClick(e){
    
  }
  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.textLabelFields}>CC Automate</Text>
        </View>
        <View style={Style.inputContainer}>
          <Text style={Style.textFields}>Please Select Dungeon Level</Text>
          <Picker
            style={Style.pickerStyle}
            selectedValue={this.state.level}
            onValueChange={(level) => this.setState({level: level})}>
            <Picker.Item label="4-10" value="4"/>
            <Picker.Item label="5-10" value="5"/>
            <Picker.Item label="6-10" value="6"/>
          </Picker>
          <Text style={Style.textFields}>Time Interval - Every:</Text>
          <Picker
            style={Style.pickerStyle}
            selectedValue={this.state.interval}
            onValueChange={(interval) => this.setState({interval: interval})}>
            <Picker.Item label="6 hours" value="6"/>
          </Picker>
          <Text style={Style.textFields}>Count</Text>
          <Picker
            style={Style.pickerStyle}
            selectedValue={this.state.count}
            onValueChange={(count) => this.setState({count: count})}>
            <Picker.Item label="18 entries" value="18"/>
          </Picker>
          <Text style={Style.textFields}>Start</Text>
          <Picker
            style={Style.pickerStyle}
            selectedValue={this.state.start}
            onValueChange={(start) => this.setState({start: start})}>
            <Picker.Item label="Now" value={this.dateParser(new Date(), 'now')}/>
            <Picker.Item
              label="Nearest Hour"
              value={this.dateParser(new Date(), 'nearestHr')}/>
            <Picker.Item
              label="Nearest (12am, 6am, 12pm, 6pm)"
              value={this.dateParser(new Date(), 'default')}/>
            <Picker.Item label="Custom" value={this.dateParser(new Date(), 'custom')}/>
          </Picker>
          <Button
            onPress={this.handleClick}
            title="Automate"
            color="#2196F3"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

AppRegistry
.registerComponent('ccAutomate', () => ccAutomate);
