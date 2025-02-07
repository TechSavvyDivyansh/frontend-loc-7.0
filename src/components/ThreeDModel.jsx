import Spline from "@splinetool/react-spline";

export default function ThreeDModel() {
  return (
    <div className="relative">
      {/* Spline Scene */}
      <div className="">
        <Spline scene="https://prod.spline.design/DQwoPNADmKJ50Z1U/scene.splinecode" />
      </div>

      {/* Floating box */}
      <div className="absolute w-[300px] h-[50px] bg-[#0a0a0a] bottom-3 right-0 "></div>
      
    </div>
  );
}
