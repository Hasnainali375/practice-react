const Header = ({ username, dummyalert }) => {
  return (
    <div>
      hello {username}
      <div>This is my portfolio profile</div>
      <button onClick={dummyalert}>show dummy alert</button>
    </div>
  );
};
export default Header;
