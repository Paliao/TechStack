import React, { Component } from 'react'
import { 
  Text, StyleSheet,
  TouchableWithoutFeedback, View,
  LayoutAnimation, UIManager 
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectLibrary } from './selectedActions'
import { CardSection } from '../common'

class ListItem extends Component {

  componentWillUpdate(){
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
    LayoutAnimation.spring()
  }

  expandDescription() {
    const { library, expanded } = this.props

    if( expanded ) {
      return (
        <CardSection>
          <Text>{this.props.library.description}</Text>
        </CardSection>
      )
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
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId.selectedId === ownProps.library.id

  return { expanded }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)