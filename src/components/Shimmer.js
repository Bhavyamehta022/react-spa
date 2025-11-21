export const Shimmer=()=>{
    return (
        <div className="shimmerParent">
            {Array(20).fill(0).map((_,i)=>{
                return <div className="shimmerCard" key={i}></div>
            })}
        </div>
    )
}
