
import BtnControlAnimation from "~/app/_components/animation-test/btn-control";
import DrageAnimation from "~/app/_components/animation-test/drag";
import Listanimation from "~/app/_components/animation-test/list-animation";
import ListAnimation from "~/app/_components/animation-test/list-animation";
import SvgAnimation from "~/app/_components/animation-test/svg-animation";
import Test1animation from "~/app/_components/animation-test/test1";
import AnimationWithBgColor from "~/app/_components/animation-test/test2";
import ScrollAnimation from "~/app/_components/animation-test/use-scroll-animation";
import FramerHooksTest from "~/app/_components/animation-test/useAnimationTest";

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
      <DrageAnimation/>
    </div>
  );
};

export default AnimationTestPage;
