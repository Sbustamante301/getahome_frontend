import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React,{Component} from "react";
import { Icons } from "../../utils";
import house1 from "../../assets/test-images/house1.jpg"
import house2 from "../../assets/test-images/house2.jpg"
import house3 from "../../assets/test-images/house3.jpg"
import styled from "@emotion/styled";
import { useState } from "react";

const StyledDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;
const StyledDiv2 = styled.div`
color:black;
`;

const SimpleSlider = ({images}) => {
  console.log(images)
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,background:"gray",height:"0px",width:"0px"}}
        onClick={onClick}
      >
        {Icons.arrowLeft}
      </div>
    );
  };
    
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,}}
        onClick={onClick}>
        {Icons.arrowRight}
      </div>
    );
    };
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:true,
    prevArrow: <CustomPrevArrow style={{height:20}} />,
    nextArrow: <CustomNextArrow />,
  });
  
  return (
    <div style={{width:"100%"}} >
      <Slider {...settings}>
        {images.map(image=>{
          return(
            <div>
              <img src={image} style={{height:500}} alt={"Sin imagen"}/> 
            </div>    
          )
        })}
        
      </Slider>
    </div>
  );
}
  
  export default SimpleSlider;