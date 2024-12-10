import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeIcon = ({ productID }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    //Recuperar o estado do Like usando LocalStorage
    const savedLiked = localStorage.getItem(`liked-${productID}`);
    if (savedLiked !== null) {
        setLiked(JSON.parse(savedLiked));
    }
  }, [productID]);


  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    //Salvando o estado no localstorage
    localStorage.setItem(`liked-${productID}`, JSON.stringify(newLiked));
  };
  return (
    <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
        {liked ? <FaHeart color="red" /> : <FaRegHeart />}
    </div>
  );
};

LikeIcon.propTypes = {
    productID: PropTypes.number.isRequired,
};

export default LikeIcon;
