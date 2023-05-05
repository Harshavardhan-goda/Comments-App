/* eslint-disable react/button-has-type */
import './index.css'

const CommentItem = props => {
  const {commentsDetails, onDeleteComment, onLiked} = props
  const {yourName, date, initialize, yourComment, isLiked, id} = commentsDetails
  const letter = yourName.slice(0, 1)
  const onDelete = () => {
    onDeleteComment(id)
  }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onLikedBtn = () => {
    onLiked(id)
  }
  const like = isLiked ? 'like' : ''

  return (
    <li>
      <div>
        <div className="card">
          <div>
            <p className={`initial ${initialize}`}>{letter}</p>
          </div>
          <div>
            <div className="name-date-icon">
              <p className="heading-name">{yourName}</p>
              <p className="para-date">{date}</p>
            </div>
            <p>{yourComment}</p>
          </div>
        </div>
        <div className="like-card">
          <div className="like-icon">
            <div className="like-icon-img">
              <button className="del-btn-card" onClick={onLikedBtn}>
                <img src={likeImg} alt="like" />
              </button>
            </div>
            <p className={like}>Like</p>
          </div>
          <div>
            <button
              className="del-btn-card"
              type="submit"
              onClick={onDelete}
              data-testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
        <hr className="separator1" />
      </div>
    </li>
  )
}
export default CommentItem
