export type Feedback = {
  id: string;
  name: string;
  text: string;
  rating: number;
  createdAt: string;
};

// Simulated mock database on the server
let feedbacks: Feedback[] = [
  {
    id: "1",
    name: "Alex Johnson",
    text: "The application is incredibly intuitive and visually stunning! Everything feels snappy and works as expected.",
    rating: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "2",
    name: "Samantha Lee",
    text: "Really good experience overall, but I think the loading states could be a bit smoother.",
    rating: 4,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
];

export async function getFeedbacks(): Promise<Feedback[]> {
  // Simulate network delay for fetching
  await new Promise((resolve) => setTimeout(resolve, 800));
  return [...feedbacks];
}

export async function submitFeedback(formData: FormData): Promise<Feedback> {
  // Simulate network delay for submitting
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const name = formData.get("name") as string;
  const text = formData.get("text") as string;
  const rating = Number(formData.get("rating"));

  if (!name || !text || !rating) {
    throw new Error("Missing required fields");
  }

  const newFeedback: Feedback = {
    id: Math.random().toString(36).substring(7),
    name,
    text,
    rating,
    createdAt: new Date().toISOString(),
  };

  feedbacks = [newFeedback, ...feedbacks];

  return newFeedback;
}
