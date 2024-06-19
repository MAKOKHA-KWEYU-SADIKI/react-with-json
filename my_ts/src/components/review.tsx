import'./review.scss'
import rating from '../util/rating';
interface dataJson{
  review_text: string;
  review_posted_date: string;
  review_header: string;
  review_rating: number;
  review_author: string;
}
const Review=(data:dataJson)=> {
  return (
  <div className='review'>
    <p className='txt'>{data.review_text}</p>
    <p className='date'>{data.review_posted_date}</p>
    <p className='header'>{data.review_header}</p>
    <p className='rating'>{rating(data.review_rating)}</p>
    <p className='author'>{data.review_author}</p>
  </div>
  )
}
export default Review