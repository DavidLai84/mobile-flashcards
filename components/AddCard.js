import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../actions'
import styles from '../styles'

class AddCard extends Component {
  state = { question: '', answer: '', error: false, requiredField: '' }
  static navigationOptions = { title: 'Add Card' }

  _handleQuestion = question => {
    this._handleTextChange(question)
    this.setState({ question })
  }

  _handleAnswer = answer => {
    this._handleTextChange(answer)
    this.setState({ answer })
  }

  _handleTextChange = text => {
    if (text.length > 0) {
      this.setState({error: false})
    }
  }

  _createCard = () => {
    const { question, answer } = this.state
    if (question.trim() === '' ) {
      return this.setState({ error: true, requiredField: 'Question' })
    }
    if (answer.trim() === '' ) {
      return this.setState({ error: true, requiredField: 'Answer' })
    }
    this.props.addCard(question, answer, this.props.deckId)
    this.setState(() => ({ question: '', answer: '' }))
	this.showSuccessMessage()
  }
  
  showSuccessMessage = () => {
	Alert.alert(
	  'New card added successfully!',
	  '',
	  [
		{text: 'OK', onPress: () => {
			const count = this.props.cardCount + 1
			const deck = this.props.deck
			this.props.navigation.navigate('Deck', { deck, count })
		}},
	  ],
	  { cancelable: false }
	)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={styles.title}>Add new Card</Text>
          <Text style={styles.label}>Question</Text>
          <TextInput
            style={styles.input}
            onChangeText={this._handleQuestion}
            value={this.state.question}
          />
          <Text style={styles.label}>Answer</Text>
          <TextInput
            style={styles.input}
            onChangeText={this._handleAnswer}
            value={this.state.answer}
          />
          {this.state.error ? (
            <Text style={styles.errorMessage}>
              {`${this.state.requiredField}`} field is required
            </Text>
          ) : (
            <Text style={styles.errorMessage} />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._createCard()}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    deckId: props.navigation.state.params.deck.id,
    deck: props.navigation.state.params.deck,
    cardCount: props.navigation.state.params.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (question, answer, deckId) => dispatch(addCard(question, answer, deckId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
