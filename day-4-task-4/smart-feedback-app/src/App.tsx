import { useState, useEffect, useOptimistic } from "react";
import { FeedbackForm } from "./components/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList";
import { getFeedbacks, submitFeedback, type Feedback } from "./actions/feedback";
import "./index.css";

export default function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeedbacks().then((data) => {
      setFeedbacks(data);
      setLoading(false);
    });
  }, []);

  const [optimisticFeedbacks, addOptimisticFeedback] = useOptimistic<
    (Feedback & { isOptimistic?: boolean })[],
    Feedback
  >(feedbacks, (state, newFeedback) => [
    { ...newFeedback, isOptimistic: true },
    ...state,
  ]);

  const addFeedbackAction = async (formData: FormData) => {
    // Generate an optimistic ID and date
    const optimisticFeedback = {
      id: Math.random().toString(),
      name: formData.get("name") as string,
      text: formData.get("text") as string,
      rating: Number(formData.get("rating")),
      createdAt: new Date().toISOString(),
    };

    // 1. Immediately update UI with optimistic state
    addOptimisticFeedback(optimisticFeedback);

    // 2. Perform the actual server action
    const newFeedback = await submitFeedback(formData);

    // 3. Update the real state with the real data
    setFeedbacks((current) => [newFeedback, ...current]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Smart Feedback</h1>
        <p>Your opinion matters to us</p>
      </header>
      
      <main className="main-content">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            Loading feedback...
          </div>
        ) : (
          <div className="dashboard-layout">
            <section className="form-section">
              <FeedbackForm action={addFeedbackAction} />
            </section>
            <section className="list-section">
              <FeedbackList feedbacks={optimisticFeedbacks} />
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
