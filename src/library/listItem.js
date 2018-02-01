import React, { Component } from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectLibrary } from './selectedActions'
import { CardSection } from '../common'

class ListItem extends Component {

  expandDescription() {
    const { library, selectedId } = this.props

    if( library.id === selectedId ) {
      return <Text>{this.props.library.description}</Text>
    }
  }

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
          {this.expandDescription()}
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
const mapStateToProps = state => ({ selectedId: state.selectedLibraryId.selectedId })

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)