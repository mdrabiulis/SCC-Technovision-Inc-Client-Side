import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="btn  bg-[#1877F2]  hover:bg-[#312ECB] text-white text-xl">
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
