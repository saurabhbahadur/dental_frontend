import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  // Fetch YouTube video links from Firestore
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoSnapshot = await getDocs(collection(db, "videos"));
        setVideos(videoSnapshot.docs.map((doc) => doc.data().url));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-secondary_bg text-gray-900 p-8">
      <h2 className="text-3xl font-bold text-primary_text text-center mb-6">Videos</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64"
                src={video}
                title={`Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No videos available.</p>
        )}
      </div>
    </div>
  );
};

export default Videos;
