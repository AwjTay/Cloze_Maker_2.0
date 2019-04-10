import { connect } from 'react-redux'
import Result from './Result'

const mapStateToProps = state => {
  return {
    text: state.unprocessed
  }
}

export default connect(mapStateToProps, null)(Result)
