<Link to={`/accounts/${this.props.currentaccount.id}`} className="greeting">
  <button className="greeting-name">{this.props.currentaccount.username}</button>
</Link>

<Route exact path="/accounts/:accountId" component={AccountShowPageContainer} />
