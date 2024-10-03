import { Stake } from "../components/cards/Stake";
import { Statistics } from "../components/cards/Statistics";

export default function Home() {

  return (
    <div className="min-h-screen flex justify-center items-center text-white py-16">
      <div className="md:w-[min(90%,_500px)] flex flex-col gap-10">
        <div>
          <h2 className="font-bold text-2xl mx-auto w-fit">Stake Ether</h2>
          <h3 className="font-medium text-xs mx-auto w-fit text-[#b3b5b8] mt-1 mb-4">Stake and receive stETH while staking</h3>
          <Stake />
        </div>
        <div>
          <h2 className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg">Lido statistics</span>
            <a className="text-xs font-medium text-[#00A3FF]">View on Etherscan</a>
          </h2>
          <Statistics />
        </div>
      </div>
    </div>
  )
};
