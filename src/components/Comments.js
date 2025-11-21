import {comments} from "../utils/comments";
import {CommentItem} from "./CommentItem";
export const Comments = ()=>{
    return (<div>
        <h1>Comments</h1>

        {comments.map((item,index)=>{return <CommentItem key={index} data={item}/>})}
    </div>)
}