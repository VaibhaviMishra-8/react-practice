const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name:{props.name}</h2>
      <h3>locaton: kolkata</h3>
      <h4>contact: 123456778</h4>
    </div>
  );
};

export default User;
