export const ChatText = ({ data }) => {
  return (
    <div className="chat">
      <div className="chatHead">
        <img src={data.photo} />
        <h4>{data.name}</h4>
      </div>

      <div className="comment">{data.text}</div>
    </div>
  );
};
