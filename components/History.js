import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { receiveEntries, addEntry } from '../actions';
import { timeToString, getDailyReminderValue } from '../utils/helpers';
import { fetchCalendarResults } from '../utils/api';

class History extends Component {
  componentDidMount() {
    fetchCalendarResults()
      .then((entries) => this.props.receiveEntries(entries))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          this.props.addEntry({
            [timeToString()]: getDailyReminderValue(),
          });
        }
      });
  }
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

const mapStateToProps = (entries) => {
  return {
    entries,
  };
};

export default connect(mapStateToProps, { receiveEntries, addEntry })(History);
