
import BtnControlAnimation from "~/custom-component/animation-test/btn-control";
import DrageAnimation from "~/custom-component/animation-test/drag";
import Listanimation from "~/custom-component/animation-test/list-animation";
import ListAnimation from "~/custom-component/animation-test/list-animation";
import SvgAnimation from "~/custom-component/animation-test/svg-animation";
import Test1animation from "~/custom-component/animation-test/test1";
import AnimationWithBgColor from "~/custom-component/animation-test/test2";
import ScrollAnimation from "~/custom-component/animation-test/use-scroll-animation";
import FramerHooksTest from "~/custom-component/animation-test/useAnimationTest";

const AnimationTestPage = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col min-h-screen">
      {/* ani -1 
      <Test1animation />
      <AnimationWithBgColor/>
      <Listanimation/>
      <BtnControlAnimation/>
      <FramerHooksTest/> */}
      {/* <ScrollAnimation/> */}
      {/* <SvgAnimation/> */}
      {/* <DrageAnimation/> */}
      {/* <BtnControlAnimation/> */}
    </div>
  );
};

export default AnimationTestPage;
