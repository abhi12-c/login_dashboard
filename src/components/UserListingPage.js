import React, { useState } from "react";
import "../styles/UserListingPage.css";

export default function UserListingPage() {
  // Generate sample user data
  const totalUsers = 100;
  const usersPerPage = 10;
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const generateUsers = () => {
    return Array.from({ length: totalUsers }, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      status: index % 2 === 0 ? "online" : "offline", // Alternate between online and offline status
      profile:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600", // Use different profile images
    }));
  };

  const [users, setUsers] = useState(generateUsers());
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderUsers = () => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return users.slice(startIndex, endIndex).map((user) => (
      <div key={user.id} className={`user-card ${user.status}`}>
        <img src={user.profile} alt={user.name} className="profile-image" />
        <div className="user-details">
          <h3>{user.name}</h3>
          <p>Status: {user.status}</p>
        </div>
      </div>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <h2>User Listing</h2>
      <div className="user-cards">{renderUsers()}</div>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
}
