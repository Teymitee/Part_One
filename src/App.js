import React from "react";
import ProductCard from "./components/ProductCard";
import MainNav from "./components/MainNav";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import CurrentMenu from "./components/CurrentMenu";
import Footer from "./components/Footer";
import { blogData, menu } from "./data";
import BlogCard from "./components/BlogCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let currentMenuCards = [];

    menu.forEach((item) =>
      currentMenuCards.push(
        <div className="col-lg-4 col-sm-6 card-wrapper" key={item.id}>
          <ProductCard data={item} />
        </div>
      )
    );

    let blogCards = [];
    blogData.forEach((item) =>
      blogCards.push(
        <div className="col-lg-4 col-sm-12 card-wrapper" key={item.id}>
          <BlogCard data={item} />
        </div>
      )
    );

    return (
      <div>
        <MainNav />
        <Banner />
        <CurrentMenu> {currentMenuCards}</CurrentMenu>
        <Testimonials />
        <Blog>{blogCards}</Blog>
        <Footer />
      </div>
    );
  }
}

export default App;
