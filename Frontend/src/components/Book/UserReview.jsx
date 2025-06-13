const UserReview = (props) => {
  return (
    <div className="w-[100%] h-fit text-2xl px-20 mb-5">
      <h1 className="text-3xl font-semibold">{props.userReview.comment}</h1>
      <h1 className="text-right">-{props.userReview.reviewer}</h1>
      <h1 className="text-right">রেটিং {props.userReview.rating}/৫</h1>
    </div>
  );
};

export default UserReview;
