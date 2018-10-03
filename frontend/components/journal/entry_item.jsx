import React from 'react';
import { Link } from 'react-router-dom';

class EntryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  deleteEntry() {
    this.props.deleteEntry(this.props.entry.id)
  }

  render() {
      return(
        <li>
          <div className="entry-options">
            <Link to={`/entry/${this.props.entry.id}`}><p>View</p></Link>
            <p onClick={this.deleteEntry}>Delete</p>
          </div>

          <div className="entry-title">
            <h4>{this.props.entry.title}</h4>
          </div>
        </li>
      )
    }
  }


export default EntryItem;
