import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="relative">
    <div className="z-10"><Spline
        scene="https://prod.spline.design/DQwoPNADmKJ50Z1U/scene.splinecode" 
      /></div>
      <div className="absolute w-[300px] h-[50px] bg-[#0a0a0a] bottom-3 right-0 z-20"></div>
      </div>
  );
}
