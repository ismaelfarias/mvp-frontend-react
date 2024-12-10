import PropTypes from "prop-types";
const PageTitle = ({ title }) => {
  return (
    <div className="page-title">
      <h2>{title}</h2>
    </div>
  );
};

PageTitle.propTypes = { 
    title: PropTypes.string.isRequired 
};

export default PageTitle;
