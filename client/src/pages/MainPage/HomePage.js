import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import icon from '../../components/qwelcome.png';
import Footer from '../Footer/Footer';




// Adjust this value to control items per page
const itemsPerPage = 6;

const HomePage = ({ handleClick }) => {
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch food data from the API endpoint
    axios.get('http://localhost:3005/api/foods')
      .then(response => setFoods(response.data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedFoods = (filteredFoods) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredFoods.slice(startIndex, endIndex);
  };

  const getFilteredFoods = (searchText) => {
    return foods.filter((food) => food.name.toLowerCase().includes(searchText.toLowerCase()));
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const renderPagination = () => {
    const filteredFoods = getFilteredFoods(searchText);
    const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <ul className="pagination justify-content-center ">  
        <li
          className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <button className="page-link">&laquo;</button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <button className="page-link">&raquo;</button>
        </li>
      </ul>
    );
  };

  return (
    <div>
      <div className="Home-Banner-Section d-flex flex-column justify-content-center ">
        <div className="Home-Banner-Section-card ">
          <div>
            <img className="Home-Banner-Section-card-icon" src={icon} alt="" />
          </div>
          <h1 className="Home-Banner-Section-card-heading tracking-in-expand ">Order Healthy And Fresh Food Any Time</h1>
          <p className="Home-Banner-Section-card-dicription">Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family</p>
          <p className="mt-5 Home-Banner-Section-card-dicription">Popular Restaurants</p>
        </div>
      </div>

      <div className="foods-section" id="foodSection">
        <h1 className="text-center foods-section-heading">Welcome to Our Food Ordering System</h1>
        <div className="search-bar ">
          
          <input className="search shadow-lg"  type="search" placeholder="Search for food items..." value={searchText} onChange={handleSearchChange}></input>
        </div>

        <div className="food-list">
          <div className="container">
            <div className="row">
              {/* Use getPaginatedFoods() to display paginated food items based on search results */}
              {getPaginatedFoods(getFilteredFoods(searchText)).map((food) => (
                <div className="col-12 col-md-4" key={food._id}>
                  <div className="food-item shadow p-3 mb-3 mt-5"> {/* Apply shadow here */}
                    <img src={food.imgUrl} alt={food.name} />
                    <div className="bg-white p-3 text-center">
                      <h1 className="food-name">{food.name}</h1>
                      <p className="price">Price : <span>₹{food.price}/-</span></p>
                      <p className='food-dis'>{food.description}</p>
                      <button onClick={() => handleClick(food)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br/>
        <br/>
        {renderPagination()}
      </div>

     
      <Footer/>
    </div>
  );
};

export default HomePage;
