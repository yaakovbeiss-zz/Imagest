import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = ( { session } ) => ({
  currentAccount: session.currentAccount
})

export default connect(
  mapStateToProps,
  null
)(Greeting)
