import { ReactNode, Suspense } from "react";

import { SideBarProvider } from "~/context/sidebar-context";
import SheetMenu from "../_components/SheetMenu";
import Nav from "../_components/Nav";
import SideBar from "../_components/sidebar/sidebar";

const DahsboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full flex-row ">
      <Suspense>
        <SideBarProvider>
          {/* <Nav>
            <SheetMenu />
          </Nav> */}
          <SideBar/>

          <div className="flex  w-full">{children}</div>
        </SideBarProvider>
      </Suspense>
      
    </div>
  );
};
export default DahsboardLayout;
