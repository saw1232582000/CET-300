import React from "react";
import MainPageLayout from "~/custom-component/main-page-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <MainPageLayout></MainPageLayout>
      {children}
    </div>
  );
};

export default Layout;
