import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LocationScreen extends PureComponent {
  render() {
    return (
      <Screen>
        <View />
      </Screen>
    );
  }
}

LocationScreen.propTypes = {};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);
