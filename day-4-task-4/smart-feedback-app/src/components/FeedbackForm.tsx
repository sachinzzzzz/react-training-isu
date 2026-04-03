import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`submit-btn ${pending ? "pending" : ""}`}
    >
      {pending ? "Submitting..." : "Submit Feedback"}
    </button>
  );
}

type FeedbackFormProps = {
  action: (formData: FormData) => void;
};

export function FeedbackForm({ action }: FeedbackFormProps) {
  const [rating, setRating] = useState<number>(5);

  const [error, submitAction] = useActionState(
    async (_previousState: string | null, formData: FormData) => {
      try {
        await action(formData);
        return null; // Success, no error
      } catch (err: any) {
        return err.message || "Failed to submit feedback.";
      }
    },
    null
  );

  return (
    <div className="feedback-form-card">
      <h2 className="form-header">Leave your feedback</h2>
      <p className="form-subtitle">We would love to hear your thoughts about our app!</p>

      {error && <div className="error-message">{error}</div>}

      <form action={submitAction} className="feedback-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            className="text-input"
          />
        </div>

        <div className="input-group">
          <label>Rating</label>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={rating === star}
                  onChange={() => setRating(star)}
                  className="sr-only"
                  required
                />
                <svg
                  className={`star-icon ${rating >= star ? "star-active" : "star-inactive"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </label>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="text">Your thoughts</label>
          <textarea
            id="text"
            name="text"
            placeholder="Tell us what you think..."
            rows={4}
            required
            className="text-input"
          ></textarea>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
