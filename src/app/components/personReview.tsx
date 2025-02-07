"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Review = {
  id: number;
  name: string;
  role: string;
  date: string;
  stars: number;
  comment: string;
  profileImage: string;
};

export default function PersonReview() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = () => {
    if (newComment.trim() === "") return;

    const newReview: Review = {
      id: reviews.length + 1,
      name: "New User",
      role: "Guest",
      date: new Date().toLocaleDateString(),
      stars: 5,
      comment: newComment,
      profileImage: "/profile.jpg", 
    };

    setReviews([...reviews, newReview]);
    setNewComment("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      {/* Reviews Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#1A202C]">Reviews</h2>
        <div className="flex items-center gap-2">
          <span className="text-[#3563E9]">{reviews.length} Reviews</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            {/* Profile Image */}
            <Image
              src={review.profileImage}
              alt="profile-pic"
              width={56}
              height={56}
              className="rounded-full"
            />

            {/* Review Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold text-[#1A202C]">
                    {review.name}
                  </p>
                  <p className="text-sm text-[#90A3BF]">{review.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#90A3BF]">{review.date}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Image
                        key={i}
                        src="/Vector.png"
                        alt="star"
                        width={16}
                        height={16}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-[#596780]">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment Section */}
      <div className="mt-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          onClick={handleAddReview}
          className="mt-4 px-6 py-2 rounded-lg bg-[#3563E9] text-white hover:bg-blue-700 active:bg-[#5c84fb]"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}