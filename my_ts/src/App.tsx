import Review from './components/review'
import './App.scss'
import DataJson from './data/data.json'
function App() {


  return (
    <>
      {
       DataJson && DataJson.map((props)=>{
          return(
            <Review review_text={props.review_text} review_posted_date={props.review_posted_date} review_header={props.review_header} review_rating={props.review_rating} review_author={props.review_author}/>
            
          )
       })
      }
    </>
  )
}

export default App
