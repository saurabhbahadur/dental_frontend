import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";

const FeedbackCard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "feedbacks"));
        setFeedbacks(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  useEffect(() => {
    if (feedbacks.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [feedbacks]);

  return (
    <div className="w-full max-w-md p-4  mt-6 text-center">
      {feedbacks.length > 0 ? (
        <>
          <p className="text-base md:text-xl text-gray-800 font-semibold italic mb-4">
            <span className="text-2xl font-serif">"</span>
            {feedbacks[currentIndex].message}
            <span className="text-2xl font-serif">"</span>
          </p>
          <h4 className="text-sm md:text-lg font-medium text-secondary_text">
            - {feedbacks[currentIndex].name}
          </h4>
        </>
      ) : (
        <p className="text-gray-500">Loading feedback...</p>
      )}
    </div>
  );
};

export default FeedbackCard;
