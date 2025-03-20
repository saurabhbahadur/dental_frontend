import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebaseconfig";
import { FaTrash } from "react-icons/fa6";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("appointments");

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
        fetchData("enquiry"); // Fetch data when user logs in
      }
    });
    return () => unsubscribe();
  }, [navigate]); // Dependency me activeTab bhi add kiya

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Fetch data from Firestore
  const fetchData = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    fetchData(tab === "appointments" ? "enquiry" : "feedbacks");
  };

  // Delete data function
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, activeTab === "appointments" ? "enquiry" : "feedbacks", id));
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 pt-16 text-white">
      <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>

        {/* User Info & Logout */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          {user && (
            <p className="text-gray-300 text-lg mb-2 sm:mb-0">
              Welcome, <span className="font-bold">{user.email}</span>
            </p>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleTabChange("appointments")}
            className={`px-4 py-2 rounded transition ${
              activeTab === "appointments"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Appointments
          </button>
          <button
            onClick={() => handleTabChange("feedbacks")}
            className={`px-4 py-2 rounded transition ${
              activeTab === "feedbacks"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Feedbacks
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto bg-gray-800 p-4 rounded">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-2 px-4 border border-gray-600">Name</th>
                <th className="py-2 px-4 border border-gray-600">Number</th>
                {activeTab === "appointments" && (
                  <th className="py-2 px-4 border border-gray-600">Email</th>
                )}
                <th className="py-2 px-4 border border-gray-600">Message</th>
                <th className="py-2 px-4 border border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.id} className="text-center border-b border-gray-600">
                    <td className="py-2 px-4 border">{item.name}</td>
                    <td className="py-2 px-4 border">{item.number}</td>
                    {activeTab === "appointments" && (
                      <td className="py-2 px-4 border">{item.email}</td>
                    )}
                    <td className="py-2 px-4 border">{item.message}</td>
                    <td className="py-2 px-4 border">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FaTrash/>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={activeTab === "appointments" ? "5" : "4"} className="text-center py-4">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
