import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";

// const feedBackCard_img="https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/pexels-eva-bronzini-7958171_qwotxe";

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
    <div
      className="h-full flex flex-col justify-center items-center px-2 py-4 rounded-2xl shadow-lg max-w-md mx-auto text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('')" }}
    >
      {/* Overlay for readability */}
      <div className="   rounded-2xl"></div>

      <div className=" z-10">
        {feedbacks.length > 0 ? (
          <>
            <p className="text-xl text-secondary_text font-semibold mb-4">"{feedbacks[currentIndex].message}"</p>
            <h4 className="text-lg font-medium text-secondary_text">- {feedbacks[currentIndex].name}</h4>
          </>
        ) : (
          <p className="text-gray-500">Loading feedback...</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackCard;
