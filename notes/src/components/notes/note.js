import React, { Component } from 'react';
import { Notecard } from '../../style/style';
import { Link } from 'react-router-dom';
import { truncate } from '../helpers/helpers';


class Note extends Component {

  render() { 
    const {id, title, textBody } = this.props.notes
    return ( 
      <Notecard>
        <div className="title">
        <p>{truncate(title,25,'...')}</p>
        </div>
        <Link className="content-link" to={`/noteView/${id}`}>
        <div className="content"  onClick={() => this.props.getId(id)}>
        <p> {truncate(textBody,400,'...')}</p>
        </div>
        </Link>
      </Notecard>
    );
  }
}
 
export default Note;