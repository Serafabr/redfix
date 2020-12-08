import { connect } from "react-redux";

export default function withAccessToSession(WrappedComponent) {

  // Get state from react-redux.
  const mapStateToProps = (storeState) => {
    return ({
      session: storeState.auth.session
    });
  }

  return connect(mapStateToProps)(WrappedComponent);
}