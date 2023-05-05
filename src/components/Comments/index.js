/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {yourName: '', yourComment: '', commentsList: [], count: 0}

  onName = event => {
    this.setState({yourName: event.target.value})
  }

  onComment = event => {
    this.setState({yourComment: event.target.value})
  }

  onDeleteComment = id => {
    const {commentsList, count} = this.state
    const filterData = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filterData, count: count - 1})
  }

  onLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onSubmitComment = event => {
    event.preventDefault()

    const {yourName, yourComment} = this.state

    const initialContainerBackgroundClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      yourName,
      yourComment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialize: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      yourName: '',
      yourComment: '',
      count: prevState.count + 1,
    }))
  }

  render() {
    const {commentsList, yourName, yourComment, count} = this.state
    return (
      <div className="container">
        <div>
          <h1>Comments</h1>
          <p>Say something about 4.0 Technologies</p>
          <form className="form-container" onSubmit={this.onSubmitComment}>
            <input
              placeholder="Your Name"
              value={yourName}
              className="name"
              onChange={this.onName}
            />
            <textarea
              placeholder="Your Comment"
              value={yourComment}
              className="comment"
              rows={15}
              cols={18}
              onChange={this.onComment}
            />
            <div>
              <button className="btn" type="submit">
                Add Comment
              </button>
            </div>
          </form>
          <hr className="separator" />
          <div className="comment-bottom-card">
            <p className="comment-bottom">{count}</p>
            <p>Comments</p>
          </div>
          <ul className="ul-card">
            {commentsList.map(each => (
              <CommentItem
                commentsDetails={each}
                key={each.id}
                onDeleteComment={this.onDeleteComment}
                onLiked={this.onLiked}
              />
            ))}
          </ul>
        </div>
        <div className="comment-img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
      </div>
    )
  }
}

export default Comments
