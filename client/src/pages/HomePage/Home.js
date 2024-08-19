import React from 'react'
import './Home.css';
import icon from '../../components/qwelcome.png';
import ExploreImg from '../../components/ExploreSection.png';
import YourOrderImg from '../../components/HowItWorksYourOrder.png';
import ReceiveOrderImg from '../../components/HowItWorksReceiveOrder.png';
import CashOnDeleiveryImg from '../../components/HowItWorksCashOnDelivery.png';
import GetStartedToday from '../../components/Get-Started-Today.jpg';
import DoorStepImg from '../../components/DoorStepImg.png';
import PopularRestaurent from './PopularRestaurents'


const PopularRestaurentsList = [
  {
    uniqueNo: 1,
    imageURL: 'https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Arcadian.jpg',
    title: 'Oraganic Arcadian Food',
    time: '12:01 am - 11:59 pm',
    address:'Benz Circle, Vijayawada'
  },
  {
    uniqueNo: 2,
    imageURL: 'https://marketplace.foodotawp.com/wp-content/uploads/2021/04/broadway.jpg',
    title: 'Tasty Food Pizza',
    time: '12:01 am - 11:59 pm',
    address:'Near PVR Mall, Vijayawada'
  },
  {
    uniqueNo: 3,
    imageURL: 'https://marketplace.foodotawp.com/wp-content/uploads/2021/04/downtown.jpg',
    title: 'Food Chef Italian',
    time: '12:01 am - 11:59 pm',
    address:'Benz Circle, Vijayawada'
  },
  {
    uniqueNo: 4,
    imageURL: 'https://marketplace.foodotawp.com/wp-content/uploads/2021/04/hardees.jpg',
    title: 'Toni Food Hub',
    time: '12:01 am - 11:59 pm',
    address:'Benz Circle, Vijayawada'
  },
  {
    uniqueNo: 5,
    imageURL: 'https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Howdy.jpg',
    title: 'Masterchef Chinese Food',
    time: '12:01 am - 11:59 pm',
    address:'Benz Circle, Vijayawada'
  },
  {
    uniqueNo: 6,
    imageURL: 'https://marketplace.foodotawp.com/wp-content/uploads/2021/04/mcdonalds.jpg',
    title: 'Fun Chicken Meals',
    time: '12:01 am - 11:59 pm',
    address:'Benz Circle, Vijayawada'
  },
  
]












function Home() {
  return (
    <div >
        <div className="Home-Banner-Section  d-flex flex-column justify-content-center   ">
            <div className="Home-Banner-Section-card  ">
                <div>
                    <img className="Home-Banner-Section-card-icon" src={icon}/>
                </div>
                <h1 className="Home-Banner-Section-card-heading tracking-in-expand ">Order Healthy And Fresh Food Any Time</h1>
                <p className="Home-Banner-Section-card-dicription">Italian food makes people think of big family dinners. So you may want to position your restaurent as a place to bring the whole family</p>
                <p className=" mt-5 Home-Banner-Section-card-dicription">Popular Restaurents</p>
            </div>

        </div>



        <div className="Home-Explore-Section pb-5 pt-5  ">
          <div className="container">
            <div className="row">

              <div className="col-12 col-lg-6 mt-5">
                <img className="Home-Explore-Section-img" src={ExploreImg} alt="" />
              </div>


              <div className="col-12 col-lg-6">
                <div className="Home-Explore-Section-Card1 mt-5 ">
                  <h6 className="Home-Explore-Section-Card1-heading1">TASTY BURGER</h6>
                  
                  <h4 className="Home-Explore-Section-Card1-heading2">Explore The Best Burger Place Near You</h4>
                  <h4 className="mt-3" style={{"fontWeight":"bold"}}>Largest Business Restaurant Food Theme in the World.</h4>
                  <p className="Home-Explore-Section-Card1-paragraph ">Make Your Own Educational Institute listing website including academies schools pre schools certifications and many more...</p>
                  <div>
                  <button className="Home-Explore-Section-Card1-btn1">Read More</button>
                  <button className="Home-Explore-Section-Card1-btn2">Search Now</button>
                  </div>
                </div>
              </div>


             

            </div>
          </div>
        </div>


        <div className="pop-res-container p-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center ">
                            <h6 className="pop-res-heading1">TOP RESTAURENTS</h6>
                            <h1 className="pop-res-heading2">Popular Restaurents</h1>
                        </div>

                    </div>

                    
                    {PopularRestaurentsList.map(eachItem => (
                      <div className="col-12 col-md-4">
                        <PopularRestaurent PopularRestaurents={eachItem} key={eachItem.uniqueNo} />
                      </div>
                    ))}

                    
                </div>
            </div>





        </div>




        <div className="HowItWorks-section p-5 ">
        <div className="container">
            <div className="row">
           <div className="col-12 mb-3">
              <h1 className="HowItWorks-section-heading1">HOW IT WORKS</h1>
              <h1 className="HowItWorks-section-heading2">Simple Process</h1>
            </div> 

            <div className="col-12 col-md-4 mb-3 ">
              <div className="HowItWorks-section-card-items p-3">
                <img className="HowItWorks-section-card-items-img" src={YourOrderImg} alt="" />
                <h1 className="HowItWorks-section-card-items-heading">Your Order</h1>
                <p className="HowItWorks-section-card-items-discription">Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>
                
              </div>
              
             </div>
             
             <div className="col-12 col-md-4 mb-3 ">
              <div className="HowItWorks-section-card-items p-3">
                <img className="HowItWorks-section-card-items-img" src={ReceiveOrderImg} alt="" />
                <h1 className="HowItWorks-section-card-items-heading">Your Order</h1>
                <p className="HowItWorks-section-card-items-discription">Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>
                
              </div>
              
             </div>
             
             <div className="col-12 col-md-4 mb-3">
              <div className="HowItWorks-section-card-items p-3">
                <img className="HowItWorks-section-card-items-img" src={CashOnDeleiveryImg} alt="" />
                <h1 className="HowItWorks-section-card-items-heading">Your Order</h1>
                <p className="HowItWorks-section-card-items-discription">Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>
                
              </div>
              
             </div>
            </div>
          </div>
          


       

        </div>




        

            
<div className="healthy-food-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 mb-5">
                    <div className="text-center">
                        <img className="healthy-food-section-img " src={GetStartedToday} />
                    </div>
                </div>
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                    <h1 className="healthy-food-section-heading">
                    Fresh, Healthy, Organic, Delicious Fruits
                    </h1>
                    <p className="healthy-food-section-description">
                        Say no to harmful chemicals and go fully organic with our range of
                        fresh fruits and veggies. Pamper your body and your senses with
                        the true and unadulterated gifts from mother nature. with the true
                        and unadulterated gifts from mother nature.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>




    
    <div className="Home-Explore-Section pb-5 pt-5  ">
          <div className="container">
            <div className="row">

              <div className="col-12 col-lg-6 mt-5">
                <img className="Home-Explore-Section-img" src={DoorStepImg} alt="" />
              </div>


              <div className="col-12 col-lg-6">
                <div className="Home-Explore-Section-Card1 mt-5 ">
                  <h6 className="Home-Explore-Section-Card1-heading1">DINE IN OR TAKE AWAY</h6>
                  
                  <h4 className="Home-Explore-Section-Card1-heading2">Get Your Order 24/7 Right At Your Doorsteps</h4>
                  <h4 className="mt-3" style={{"fontWeight":"bold"}}>Largest Business Restaurant Food Theme in the World.</h4>
                  <p className="Home-Explore-Section-Card1-paragraph ">Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have approximately half the risk of developing diabetes</p>
                  <div>
                  <button className="Home-Explore-Section-Card1-btn1">Order Now</button>
                  <button className="Home-Explore-Section-Card1-btn2">Search Now</button>
                  </div>
                </div>
              </div>


             

            </div>
          </div>
    </div>


    




    </div>
              
  )
}

export default Home