import { Outlet } from "react-router-dom";

const TextileLayout = () => {
  return (
    <>
      <main className="flex-grow">
        <Outlet />
      </main>
    </>
  );
};

export default TextileLayout;
