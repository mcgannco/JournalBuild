import React from 'react';
import EntryItem from './entry_item';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';

class Journal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      createForm: false,
      title: "",
      body: ""
    }
    this.openCreate = this.openCreate.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateBody = this.updateBody.bind(this)
    this.createNewEntry = this.createNewEntry.bind(this)
    this.closeCreate = this.closeCreate.bind(this)
  }

  componentDidMount() {
    this.props.requestAllEntries()
  }

  openCreate() {
    this.setState({createForm: true})
  }

  closeCreate() {
    this.setState({createForm: false})
  }

  updateTitle(e) {
    this.setState({title: e.currentTarget.value})
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value})
  }

  createNewEntry() {
    let entryForm = new FormData();
    entryForm.append("entry[title]", this.state.title);
    entryForm.append("entry[body]", this.state.body);

    this.props.createEntry(entryForm).then(
      this.setState({title: "", createForm: false})
    )
  }

  render() {
    const {  currentUser, entries, deleteEntry } = this.props;
    if (!currentUser) {
      return <div className="main-logo">
              <span>
                <i className="fas fa-book"></i>
              </span>
            </div>;
    }
    
        return(
          <div className="entries-container">
            <div className={this.state.createForm ? "hidden" : "entry-header"}>
              <div>
                <h1>{currentUser.username}s Entries</h1>
                <p onClick={this.openCreate}>Create New Entry</p>
              </div>
            </div>

            <div className={this.state.createForm ? "hidden" : "entry-items-container"}>
              <ul>
                {entries.filter(entry => entry.user_id === currentUser.id).map(entry => <EntryItem currentUser={currentUser} key={entry.id} deleteEntry={deleteEntry} entry={entry}/>)}
              </ul>
            </div>

            <div className = {this.state.createForm ? "entry-header" : "hidden"}>
              <div>
                <h1>New Entry</h1>
                <p onClick={this.closeCreate}>All Entries</p>
              </div>
            </div>

            <div className = {this.state.createForm ? "entry-items-container" : "hidden"}>
              <span>
                <input onChange={this.updateTitle} value={this.state.title} placeholder="Title"></input>
                <textarea className = "entry-body" value={this.state.body} onChange={this.updateBody}>{this.state.body}</textarea>
                <button onClick={this.createNewEntry}>Create</button>
              </span>
            </div>

        </div>
      )
    }
}


  export default Journal;
