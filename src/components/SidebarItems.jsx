/* eslint-disable react/prop-types */
const sidebarItems = ({ Toggle, Item, handleOnChange }) => {
  const func1 = () => {
    handleOnChange();
  };
  return (
    <li className="nav-item">
      <a
        href="#"
        onClick={(e) => func1(e)}
        className={`nav-link text-white ${Toggle && "active"}`}
        aria-current="page"
      >
        <svg className="bi pe-none me-2" width="16" height="16"></svg>
        {Item}
      </a>
    </li>
  );
};

export default sidebarItems;
