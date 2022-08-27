import React from 'react'
import ProductCard from './components/ProductCard';
import MainNav from './components/MainNav';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CurrentMenu from './components/CurrentMenu'
import Footer from './components/Footer';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let currentMenuCards = [];

    menu.forEach(item => (
      currentMenuCards.push(
        <div className="col-lg-4 col-sm-6 card-wrapper" key={item.id}>
          <ProductCard data={item}/>
        </div>
      )
    ))

    let blogCards = [];
    blogData.forEach(item => (
      blogCards.push(
        <div className="col-lg-4 col-sm-12 card-wrapper" key={item.id}>
          <ProductCard data={item} />
        </div>
      )
    ))

    return (
      <div>
        <MainNav />
        <Banner />
        <CurrentMenu> {currentMenuCards}</CurrentMenu>
        <Testimonials />
        <Blog>{blogCards}</Blog>
        <Footer/>
      </div>

    )



  }


}

const blogData = [
  {
    id: 1,
    date: "2nd August, 2022",
    picture: "https://kwickmeals.com/wp-content/uploads/2021/12/jollof-and-chicken-400x400-1.jpg",
    name: "Jellof Rice and Chicken",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#1,500"
  },
  {
    id: 2,
    date: "2nd August, 2022",
    picture: "https://kwickmeals.com/wp-content/uploads/2021/12/jollof-and-chicken-400x400-1.jpg",
    name: "Jellof Rice and Chicken",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#1,500"
  },
  {
    id: 3,
    date: "2nd August, 2022",
    picture: "https://kwickmeals.com/wp-content/uploads/2021/12/jollof-and-chicken-400x400-1.jpg",
    name: "Jellof Rice and Chicken",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#1,500"
  }
]


const menu = [
  {
    id: 1,
    picture: "https://kwickmeals.com/wp-content/uploads/2021/12/jollof-and-chicken-400x400-1.jpg",
    name: "Jellof Rice and Chicken",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#1,500"
  },
  {
    id: 2,
    picture: "https://allnigerianfoods.com/wp-content/uploads/okro_soup_recipe.jpg",
    name: "Swallow with Draw Soup",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#1,000"
  },
  {
    id: 3,
    picture: "https://storage.dado.ng/wp-content/uploads/2022/02/16124536/IMG_1744.jpg",
    name: "Fries with Egg sauce",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#1,500"
  },
  {
    id: 4,
    picture: "https://www.vanniekaycuisine.com/wp-content/uploads/2020/11/AFRICA-FOOD-1.jpg",
    name: "Swallow with Egusi Soup",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#1,000"
  }, {
    id: 5,
    picture: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/4/1/FNM_060111-WN-Dinners-028_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597591674.jpeg",
    name: "Beans",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#700"
  }, {
    id: 6,
    picture: "https://www.tinuolasblog.com/wp-content/uploads/2020/12/IMG_20201225_214010-scaled.jpg",
    name: "Fried Rice",
    description: "Fried potato/yam chips with egg sauce or any toppings of your choice",
    price: "#600"
  },

]













export default App