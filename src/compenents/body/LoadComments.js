import dateFormate from 'dateformat'

const LoadComments = props => {
    return ( 

       props.comments.map(comment => {
         return (
           <div key={comment.id} className="col-12">
              <h5>{comment.author}</h5>
              <p>{comment.comment}</p>
              <p> <small>{ dateFormate(comment.date, "dddd, mmmm dS, yyyy, h:MM TT") }</small></p>
           </div>
         )
       })

    )
}

export default LoadComments