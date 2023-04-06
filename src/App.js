
function App() {

  return (
   <>
    <div className="relative text-white text-center overflow-hidden min-h-[calc(100vh-280px)]">
     <div className="relative z-50">
        <div className="absolute top-24 left-5 hidden lg2:flex items-center flex-col gap-8 w-fit">
          <img src="/images/icon1.svg" alt="icon" />
          <img src="/images/icon2.svg" alt="icon" />
          <img src="/images/icon3.svg" alt="icon" />
        </div>


        <div className="max-w-[900px] mx-auto flex items-center justify-center flex-col pt-12 lg2:pb-32 px-4">
          <img src="/images/logo.svg" alt="logo" className="w-[500px]" />

          <div className="text-[38px] font-bold mt-8">Exklusive <span className="text-[#184EFF]">$14</span> No-Deposit Offer 🎁</div>
          <div className="text-[15px] font-[500] mt-3">To celebrate the launch of our Sportsbook we have partnered with Blockchair to give all users a FREE$14 Non-Deposit Bonus.</div>
          
          <div className="customShadow2 flex items-center gap-1 sm2:gap-7 flex-col sm2:flex-row rounded-xl bg-[#161E56] px-5 pt-4 sm2:pt-0 mt-8">
            <div className="text-[#5D69BE] font-[500]">The Free Non-Deposit Bonus can be claimed in:</div>
            <img src="/images/coins.svg" alt="coins" className="w-[170px]" />
          </div>

          <div className="text-[30px] font-bold mt-5">Join our Heybets Discord & Claim the Bonus now:</div>


          <a href="#" className="customBG rounded-xl px-2.5 pt-3 pb-2 w-fit flex flex-col mt-3">
            <div className="flex items-center gap-4">
               <img src="/images/discord.svg" alt="discord" className="w-[45px]" />
               <div className="text-[20px] font-[600]">JOIN DISCORD</div>
            </div>
            <div className="text-[18px] font-[600] pl-1.5 mt-1.5">CLAIM FREE $14 CRYPTO!</div>
          </a>

          <div className="customShadow rounded-lg bg-[#161E56] w-full p-2 pt-0 mt-10">
              <div className="text-center text-[#5D69BE] my-3">Join this Channel to claim the Bonus:</div>
              <img src="/images/discord2.png" alt="discord" className="w-full" />
          </div>


          <div className="flex lg2:hidden items-center justify-center flex-wrap gap-8 mt-10 mb-12">
            <img src="/images/icon1.svg" alt="icon" />
            <img src="/images/icon2.svg" alt="icon" />
            <img src="/images/icon3.svg" alt="icon" />
          </div>

        </div>
     </div>

      <img src="/images/hero.png" alt="hero" className="absolute top-0 left-0 w-full h-full object-cover" />
    </div>


    <div className="relative flex items-center justify-center flex-col text-white text-center py-7 bg-[#0E164A]">
      <img src="/images/logo2.svg" alt="logo" />
      <div className="max-w-[1200px] mx-auto px-4 text-[#5D69BE] text-[15px] font-semibold mt-5 mb-5">Heybets.io is owned and operated by LFG Gaming N.V , Reg No 162024, having its registered address at Zuikertuintjeweg Z/N, Willemstad, Curacao, licensed to conduct online gaming operations by the Government of Curacao under license GLH-OCCHKTW0711122022.LFG Gaming N.V. payments can be processed by LFG GAMING LIMITED (Registration Number HE443087). Company Address: Avlonos, 1, MARIA HOUSE, 1075, Nicosia, Cyprus</div>
      <img src="/images/logo2.png" alt="logo" />
    </div>
   </>
  );
}

export default App;
