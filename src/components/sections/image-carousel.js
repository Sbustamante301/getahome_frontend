import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React,{Component} from "react";
import { Icons } from "../../utils";
import house1 from "../../assets/test-images/house1.jpg"
import house2 from "../../assets/test-images/house2.jpg"
import house3 from "../../assets/test-images/house3.jpg"
import styled from "@emotion/styled";
import { useState,useEffect } from "react";




const StyledDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;

`;

const StyledDiv2 = styled.div`
color:black;

`;

const SimpleSlider = () => {
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
      
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    });
  
    useEffect(() => {
      // cualquier efecto secundario aquí
    }, []);
  
    return (
      <div style={{alignItems:"center",width:"730px",height:"384px",marginLeft:"300px"}} >
        <Slider {...settings}>
          <div>
            <img src={house1}/> 
          </div>
          <div>
            <img src={house2}/>
          </div>
          <div>
            <img src={house3}/>
          </div>
        </Slider>
      </div>
    );
  }
  
  export default SimpleSlider;