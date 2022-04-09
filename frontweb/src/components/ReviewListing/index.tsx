import { Review } from "types/review";



type ListingReviews = {
    reviews: Review[];
  };
  
  const ReviewListing = ({ reviews }: ListingReviews) => {
  
    return (
      <div className="reviews-container">
        {reviews?.map(review =>(
          <div className="content-reviews" key={review.id}>
            <h3>{review.user.name}</h3>
            <div className="review">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ReviewListing;