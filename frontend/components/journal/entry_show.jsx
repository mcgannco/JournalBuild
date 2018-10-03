import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class EntryShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      updateForm: false,
      title: "",
      body: ""
    }
    this.openUpdateForm = this.openUpdateForm.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleEntry(this.props.match.params.entryId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.entryId !== nextProps.match.params.entryId) {
      this.props.requestSingleEntry(nextProps.match.params.entryId);
    }
  }

  openUpdateForm(e) {
    this.setState({updateForm: true, title:this.props.entry.title, body: this.props.entry.body})
  }

  updateEntry() {
    let entryForm = new FormData();
    entryForm.append("entry[title]", this.state.title);
    entryForm.append("entry[body]", this.state.body);
    entryForm.append("entry[user_id]", this.props.entry.user_id);
    this.props.updateEntry(this.props.entry.id, entryForm).then(
      this.setState({updateForm: false, title: "", body: ""})
    )
  }

  updateTitle(e) {
    this.setState({title: e.currentTarget.value})
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value})
  }

  render() {
    const {entry, currentUser} = this.props
    if(!entry || !currentUser) {
      return null
    } else if(entry && currentUser) {
      if(currentUser != entry.user_id) {
        return null
      } else {
        return(
            <div className="entry-show-container">
              <div className="entry-show-options">
                <span className={this.state.updateForm ? "hidden" : ""} onClick={this.openUpdateForm}>Update</span>
                <span className={this.state.updateForm ? "" : "hidden"} onClick={this.updateEntry}>Save</span>
                <Link to='/'><span>All Entries</span></Link>
              </div>

              <div className="entry-show-title">
                <div>
                  <p className={this.state.updateForm ? "hidden" : ""}>{entry.title}</p>
                  <input onChange={this.updateTitle}className={this.state.updateForm ? "new-title" : "hidden"} value={this.state.title}></input>
                </div>


              </div>

              <div className="entry-show-body">
                <p className={this.state.updateForm ? "hidden" : ""}>{entry.body}</p>
                  <textarea onChange={this.updateBody} className={this.state.updateForm ? "new-body" : "hidden"} value={this.state.body}>{this.state.body}</textarea>
              </div>

          </div>
        )
      }
    }
    }
  }


export default EntryShow;
