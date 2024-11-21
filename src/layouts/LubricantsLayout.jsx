import { Outlet } from "react-router-dom";

const LubricantsLayout = () => {
  return (
    <>
      <main className="flex-grow">
        <Outlet />
      </main>
    </>
  );
};

export default LubricantsLayout;
