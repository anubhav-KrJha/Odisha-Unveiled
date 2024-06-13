import React from "react";
import Banner from "./home/Banner";
import Contents from "./home/Contents";
import FoodSlider from './Foodslider';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Content, Maincontents, Bigcontents,Contentt } from "./Maincontents";
import "./home/contents.css";
import ImgSlider from "./components/ImgSlider";
const foods = [
  {
    id: 1,
    name: 'Pakhala',
    description: 'A bowl of pakhala & assorted dishes is just what you need to beat the heat.',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 2,
    name: 'Fish Curry',
    description: 'The natural sweetness of the Rohu (carp) leaves a lasting impression in a simple Macha Jhola (fish gravy).',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    name: 'Mati Handi Mutton',
    description: 'Marinated with spices and simmered in an earthen pot.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfyjZqIXCTyayq4bP6P1kq6gkoZ9UfiblyA&usqp=CAU',
  },
  {
    id: 4,
    name: 'Pitha',
    description: 'Satiate your sweet tooth with a delicious plate of Assorted Pitha.',
    image: 'https://odishatourism.gov.in/content/dam/tourism/home/cusines-to-explore/cuisinew1.png',
  },
  {
    id: 5,
    name: 'Rasagola',
    description: 'The delightful sweet dish Rasagola, is inherently associated with the tradition and heritage of Odisha.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4prUo53YCYqeHESncN9iA7NRxCCb87oJGA&usqp=CAU',
  },
];
class Home extends React.Component {
  state = {
    maincontent: Maincontents,
    bigcontent: Bigcontents,
    contents: Content,
    contentss: Contentt,
  };
  render() {
    return (
      <div>
        <Banner />
        <br></br>
        <div className="Lool">
          <h2>Top three attractions</h2>
        </div>

        <div className="home__cont">
          {this.state.maincontent.map((item) => {
            return (
              <div key={item.id}>
                <Contents
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
        <div className="Lool">
          <h2>Extraordinary Reasons to Visit ODISHA</h2>
        </div>
        <Container>
          <ImgSlider/>
        </Container>
        <div className="Lool">
          <h2>Explore More</h2>
        </div>
        <div className="home__cont">

          {this.state.contents.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    // amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="home__cont">
          {this.state.contentss.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    // amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="Lool">
          <h2>Cuisine</h2>
        </div>
        <div><FoodSlider foods={foods} /></div>
      </div>
    );
  }
}
export default Home;

const Container = styled.main`
    height: 500px; /* set height to match the height of the images in the slider */
    width: 100%; /* set width to 100% to match the width of the image slider */
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-size: cover; /* add this to make sure the background image fills the entire container */
    }
`