import { connect } from 'react-redux'
import Result from './Result'

const mapStateToProps = state => {
  return {
    text: state.unprocessed,
    keywords: state.removedWords,
    cloze: state.processed

  }
}

export default connect(mapStateToProps, null)(Result)
