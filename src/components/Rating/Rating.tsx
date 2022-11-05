import React from 'react'
import { AiFillStar, AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";

interface RatingProp {
    color: string;
    rating: any;
}

const Rating = (props: RatingProp) => {
  return (
    <div>
        { props.rating >= 1 ? <AiFillStar color={props.color} size="20" />  : props.rating >= 0.5 ? <IoMdStarHalf color={props.color} size="23" /> :  <AiOutlineStar color={props.color} size="20" /> }
        { props.rating >= 2 ? <AiFillStar color={props.color} size="20" />  : props.rating >= 1.5 ? <IoMdStarHalf color={props.color} size="23" /> :  <AiOutlineStar color={props.color} size="20" /> }
        { props.rating >= 3 ? <AiFillStar color={props.color} size="20" />  : props.rating >= 2.5 ? <IoMdStarHalf color={props.color} size="23" /> :  <AiOutlineStar color={props.color} size="20" /> }
        { props.rating >= 4 ? <AiFillStar color={props.color} size="20" />  : props.rating >= 3.5 ? <IoMdStarHalf color={props.color} size="23" /> :  <AiOutlineStar color={props.color} size="20" /> }
        { props.rating >= 5 ? <AiFillStar color={props.color} size="20" />  : props.rating >= 4.5 ? <IoMdStarHalf color={props.color} size="23" /> :  <AiOutlineStar color={props.color} size="20" /> }
    </div>
  )
}

Rating.defaultProps = {
    color: "#ff8000"
}


export default Rating