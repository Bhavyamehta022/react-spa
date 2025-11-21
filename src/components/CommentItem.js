export const CommentItem = ({ data }) => {
  return (
    <div>
      <div className="parentComment">
        <h4>{data.username}</h4>
        <span>{data.comment}</span>
      </div>
      <div className="replies">
        {data.replies?.length > 0 && data.replies.map((item,index)=>( <CommentItem key={index} data={item}/>)) }
      </div>
    </div>
  );
};
/*data.replies.length && <CommentItem data={data.replies}/> 
<CommentItem data={data.replies[0]}/>
*/
