import { Spinner } from "@heroui/react";

const MainLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner size="lg" color="current" />
    </div>
  );
};

export default MainLoader;
