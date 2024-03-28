const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}>
        {`${percentage}%`}
      </div>
    </div>
  );
};

export default ProgressBar;