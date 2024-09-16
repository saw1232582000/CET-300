import Head from "next/head";
import React from "react";
import HomePageComponent from "~/custom-component/home-page/Home";


const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Ecommerce Website</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
      </Head>
      <div className="flex w-full overflow-x-hidden overflow-y-auto">
        <HomePageComponent />
      </div>
    </div>
  );
};

export default HomePage;
