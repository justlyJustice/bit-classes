const RegisterBtn = ({ loading }) => {
  return (
    <button type="submit" disabled={loading}>
      {!loading ? (
        <>
          Register <i className="fa-solid fa-arrow-right"></i>
        </>
      ) : (
        <i className="fa-solid fa-spinner fa-pulse"></i>
      )}
    </button>
  );
};

export default RegisterBtn;
