import { type Feedback } from "../actions/feedback";

type FeedbackListProps = {
  feedbacks: (Feedback & { isOptimistic?: boolean })[];
};

export function FeedbackList({ feedbacks }: FeedbackListProps) {
  if (feedbacks.length === 0) {
    return <div className="empty-state">No feedback yet. Be the first!</div>;
  }

  return (
    <div className="feedback-list">
      <h3 className="list-header">Recent Feedback</h3>
      <div className="feedback-grid">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className={`feedback-item ${feedback.isOptimistic ? "optimistic" : ""}`}
          >
            <div className="feedback-header">
              <span className="feedback-name">{feedback.name}</span>
              <div className="feedback-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`small-star-icon ${
                      feedback.rating >= star ? "star-active" : "star-inactive"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="feedback-text">{feedback.text}</p>
            <span className="feedback-date">
              {new Date(feedback.createdAt).toLocaleDateString()}
              {feedback.isOptimistic && " (Sending...)"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
