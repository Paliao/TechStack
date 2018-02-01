import React, { Component } from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectLibrary } from './selectedActions'
import { CardSection } from '../common'

class ListItem extends Component {
  render() {
    const { id, title } = this.props.library
    return(
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({selectLibrary}, dispatch)

export default connect(null, mapDispatchToProps)(ListItem)