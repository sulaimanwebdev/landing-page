import { useState, useEffect } from "react";

function App() {

  const [nav, setnav] = useState('-translate-x-full');
  const [text1, settext1] = useState('pulsechain');
  const [text2, settext2] = useState('');
  const [text3, settext3] = useState('');

  let runForever = () =>{
    setTimeout(function(){ 
      settext1('')
      settext2('liquidity');  
      settext3('');  
  
  }, 3000);


  setTimeout(function(){ 
    settext1('')
    settext2('');  
    settext3('wiz');  
}, 6000);

setTimeout(function(){ 
  settext1('pulsechain')
  settext2('');  
  settext3('');  
}, 9000);
  }

  useEffect(() => {
    runForever();
    setInterval(runForever, 9000)
 
   
  }, [])
  

  return (
   <>
    {/* <div className="preloader z-[999999] flex items-center justify-center h-screen bg-white w-full fixed top-0 left-0">
    <img src="/images/loader.gif" alt="loader" />
    </div> */}
    <div className="bg-[black] relative ">
    <div className="w-full text-white">
    <div className="flex bg-[black] items-center py-3 z-[999] justify-between px-5 max-w-[1300px] mx-auto">
       <div className="cursor-pointer flex items-center gap-3 font-[500] text-[19px]"><img src="/images/logo.svg" alt="logo" className="w-[38px]"/><div className="transform translate-y-3.5">inch</div></div>
       <div className="nav items-center gap-6 hidden md:flex transform translate-x-8">
        <a href="/#" className="transition font-[500]">HOME</a>
        <a href="/#" className="transition font-[500]">AIRDROP</a>
        <a href="/#" className="transition font-[500]">WHITEPAPER</a>
       </div>
       <div className="hidden md:block">
        <div class="outer button">
            <button>LAUNCH APP</button>
            <span></span>
            <span></span>
         </div>
         </div>
       <button onClick={()=> {setnav('translate-x-0')}} className="block md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button>
      </div>
    </div>

    <div className={`nav flex text-white md:hidden z-[999] text-left text-shite w-full fixed h-screen top-0 left-0 bg-[black] px-5 pb-6 pt-[50px] gap-10 flex-col transform transition ${nav}`}>
       <a href="/#" className="transition font-[500]">HOME</a>
        <a href="/#" className="transition font-[500]">AIRDROP</a>
        <a href="/#" className="transition font-[500]">WHITEPAPER</a>
        <div class="outer button">
            <button>LAUNCH APP</button>
            <span></span>
            <span></span>
         </div>
       <button onClick={()=> {setnav('-translate-x-full')}} className="absolute top-5 right-6"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
       </div>

    <div className="pt-[100px] pb-10 px-5 max-w-[1300px] mx-auto text-white text-center relative" style={{zIndex: '10'}}>
      <h1 className="heading text-[4rem] sm:text-[5rem] md:text-[7rem] font-[900] leading-[1.1] tracking-normal"><div className={`text-transition ${text1}`}>Pulsechain</div><div className={`text-transition ${text2}`}>Liquidity</div><div className={`text-transition transform translate-y-2 ${text3}`}>Wiz</div></h1>
      <p className="tracking-wider text-[16px] sm:text-[18px] mt-6">First DEX where traders earn along with Liquidity Providers</p>
      <div className="mx-auto w-full mt-6 md:w-[600px] py-2 rounded-md bg-white text-black font-[500]">Powered By Pulsechain</div>
    


      <div className="mt-[160px] mx-auto max-w-[1120px]">
        <div className="w-full flex items-center justify-center">
           <div className="relative w-[50px] h-[50px] rounded-full text-[17px] mb-[30px] font-[500] flex items-center justify-center blueGradCircle text-white">1 <div className="absolute left-1/2 bottom-full h-[100px] w-[1px] lineGrad"></div></div>
        </div>

        <div className="font-[700] text-[27px] blueGrad">FEATURES</div>
      <div className="text-[35px] md:text-[55px] font-[900] mt-6 leading-snug tracking-wide mb-5">Decentralised Exchange on Pulsechain</div>
      
      <div className="mb-24 flex justify-between gap-8 md:gap-5 text-center md:text-left flex-col md:flex-row">
        <div className="text-[16px] text-[#a0a0a0] md:max-w-[450px] leading-relaxed">Developers love</div>
        <div className="text-[16px] text-[#a0a0a0] md:max-w-[450px] leading-relaxed">6inch will be the best DEX on Pulsechain proving value and valuing both traders and Liquidity Providers. 6inch will be the best DEX on Pulsechain proving value and valuing both.</div>
      </div>
      
      <div className="flex gap-16 items-center flex-col md:flex-row lg:items-start justify-between text-left">
         <div><img src="/images/sideimage.svg" alt="side" className="w-[470px]" /></div>
        <div>
        <div className="max-w-[550px]">
          <div className="text-[25px] font-[600]">Small Sacrifice Pool</div>
          <div className="mt-3 text-[16px] text-[#a0a0a0] leading-relaxed">The total amount to be raised set a maximum of only $25,000. Only the true early supporters gets to be a part of buying the tokens in its early stage.</div>
         </div>

         <div className="mt-14 max-w-[550px]">
          <div className="text-[25px] font-[600]">Retroactive Airdrops</div>
          <div className="mt-3 text-[16px] text-[#a0a0a0] leading-relaxed">Recurring retroactive airdrops depending on the volume from your wallet.</div>
         </div>


         <div className="mt-14 max-w-[550px]">
          <div className="text-[25px] font-[600]">Community Oriented</div>
          <div className="mt-3 text-[16px] text-[#a0a0a0] leading-relaxed">Zero tokens pre-owned by the team. All tokens are only for those who helps in the adoptions of 6inch.</div>
         </div>

        </div>

      </div>


      <div className="mt-20 font-[500]">SUPPORTED CHAINS</div>
      <div className="mt-6 flex items-center justify-center gap-7 flex-wrap">
       <div className="min-w-[50px] min-h-[50px] bg-white bg-opacity-20 rounded-full"></div>
       <div className="min-w-[50px] min-h-[50px] bg-white bg-opacity-20 rounded-full"></div>
       <div className="min-w-[50px] min-h-[50px] bg-white bg-opacity-20 rounded-full"></div>
       <div className="min-w-[50px] min-h-[50px] bg-white bg-opacity-20 rounded-full"></div>
       <div className="min-w-[50px] min-h-[50px] bg-white bg-opacity-20 rounded-full"></div>
       <div className="min-w-[50px] min-h-[50px] bg-white bg-opacity-20 rounded-full"></div>
       <div className="min-w-[50px] min-h-[50px] bg-white bg-opacity-20 rounded-full"></div>
      </div>
        
      </div>






      <div className="text-[35px] md:text-[55px] font-[900] mt-[100px] md:mt-[150px] leading-snug tracking-wide">People's DEX of Pulsechain</div>
     <div className="flex items-center justify-center gap-16 flex-wrap mt-[70px] md:mt-[70px] mb-[30px] md:mb-[70px]">
       <a href="/#" className="stat-block transition">
        <div className="text-[70px] font-bold">$0</div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-[20px] tracking-widest">TVL</div>
          <img src="/images/arrow.svg" className="w-[35px]" alt="arrow" />
        </div>
       </a>

       <a href="/#" className="stat-block transition">
        <div className="text-[70px] font-bold">$0</div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-[20px] tracking-widest">24 HR TRADING VOLUME</div>
          <img src="/images/arrow.svg" className="w-[35px]" alt="arrow" />
        </div>
       </a>


       <a href="/#" className="stat-block transition">
        <div className="text-[70px] font-bold">0</div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-[20px] tracking-widest">Tokens Listed</div>
          <img src="/images/arrow.svg" className="w-[35px]" alt="arrow" />
        </div>
       </a>


     </div>


    </div>
    {/* <img src="/images/dots.svg" className="absolute top-[220px] left-0 md:left-14" alt="dots" /> */}
    <img src="/images/triangle.svg" className="hidden md:block absolute -bottom-[80px] right-10 w-[200px]" alt="dots" />
    
    </div>

    <div className="w-full bg-[black] text-center">
      <div className="max-w-[780px] mx-auto text-white py-16 px-5">
      <div className="text-[35px] md:text-[55px] font-[900] leading-snug tracking-wide">Explore the community</div>
      <div className="tracking-wider max-w-[580px] leading-relaxed opacity-70 font-[300] mx-auto text-[16px] sm:text-[18px] mt-6">Join the discussion on one of our many forums. Learn about the 6inch Labs, meet others, and become an active voice in the space.</div>
       <div className="flex items-center justify-center flex-wrap gap-12 mt-12">
        <a href="/#" className="transition transform hover:-translate-y-1"><svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.5385 0.935038L1.62856 12.8467C0.719858 13.1969 0.733047 14.4871 1.64872 14.8187L9.17544 17.5439L27.6873 6.17694C27.8676 6.06622 28.0535 6.31032 27.8988 6.45469L13.386 20V28.2456L19 23.3333L26.3091 28.4768C27.3362 29.1995 28.7678 28.6405 29.0334 27.413L34.415 2.54148C34.6511 1.45026 33.5803 0.533565 32.5385 0.935038Z" fill="white"/></svg></a>
        <a href="/#" className="transition transform hover:-translate-y-1"><svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.675 4.95C28.0419 4.95 29.15 3.8419 29.15 2.475C29.15 1.1081 28.0419 0 26.675 0C25.7097 0 24.8734 0.552675 24.4654 1.35887L18.547 0.0137917C18.2538 -0.0528446 17.9614 0.128322 17.8906 0.420535L15.8568 8.80996C11.9742 8.92894 8.49395 10.1198 6.01849 11.9655C5.37927 11.3667 4.51995 11.0001 3.575 11.0001C1.60058 11.0001 0 12.6007 0 14.5751C0 16.0801 0.929958 17.3679 2.24659 17.8952C2.21573 18.1607 2.2 18.4291 2.2 18.7001C2.2 24.1677 8.60233 28.6001 16.5 28.6001C24.3977 28.6001 30.8 24.1677 30.8 18.7001C30.8 18.4291 30.7843 18.1607 30.7534 17.8952C32.07 17.3679 33 16.0801 33 14.5751C33 12.6007 31.3994 11.0001 29.425 11.0001C28.48 11.0001 27.6207 11.3667 26.9815 11.9655C24.4735 10.0955 20.934 8.8977 16.9897 8.80582L18.8319 1.20659L24.2005 2.42672C24.2002 2.44278 24.2 2.45887 24.2 2.475C24.2 3.8419 25.3081 4.95 26.675 4.95ZM24.75 17.0501C24.75 18.5688 23.5188 19.8001 22 19.8001C20.4812 19.8001 19.25 18.5688 19.25 17.0501C19.25 15.5313 20.4812 14.3001 22 14.3001C23.5188 14.3001 24.75 15.5313 24.75 17.0501ZM11 19.8001C12.5188 19.8001 13.75 18.5688 13.75 17.0501C13.75 15.5313 12.5188 14.3001 11 14.3001C9.48122 14.3001 8.25 15.5313 8.25 17.0501C8.25 18.5688 9.48122 19.8001 11 19.8001ZM10.3596 22.689C10.5866 22.4872 10.9343 22.5076 11.1361 22.7347C11.5936 23.2494 12.3472 23.6728 13.3089 23.9662C14.2628 24.2572 15.3764 24.4063 16.5 24.4063C17.6236 24.4063 18.7372 24.2572 19.6911 23.9662C20.6528 23.6728 21.4064 23.2494 21.8639 22.7347C22.0657 22.5076 22.4134 22.4872 22.6404 22.689C22.8674 22.8908 22.8879 23.2384 22.6861 23.4655C22.0436 24.1883 21.0784 24.693 20.0121 25.0183C18.9378 25.3461 17.7139 25.5063 16.5 25.5063C15.2861 25.5063 14.0622 25.3461 12.9879 25.0183C11.9216 24.693 10.9564 24.1883 10.3139 23.4655C10.1121 23.2384 10.1326 22.8908 10.3596 22.689Z" fill="white"/></svg></a>
        <a href="/#" className="transition transform hover:-translate-y-1"><svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.8124 2.22424C27.5706 1.19556 25.1631 0.435781 22.6461 0.00117265C22.5992 -0.00508111 22.5554 0.0136786 22.5304 0.0574525C22.2209 0.607748 21.8769 1.32376 21.6362 1.88969C18.9316 1.48635 16.2364 1.48635 13.585 1.88969C13.3473 1.31125 12.9909 0.607748 12.6782 0.0574525C12.6563 0.0136786 12.6094 -0.00508111 12.5625 0.00117265C10.0487 0.435781 7.64114 1.19244 5.39618 2.22424C5.37742 2.23362 5.35866 2.24613 5.34928 2.26489C0.781198 9.08731 -0.469475 15.7409 0.146482 22.3132C0.146482 22.3444 0.165242 22.3757 0.190255 22.3945C3.20438 24.6082 6.12157 25.9495 8.98561 26.8406C9.02938 26.8531 9.07941 26.8375 9.10755 26.8C9.78604 25.8745 10.3895 24.8989 10.9085 23.8734C10.9367 23.814 10.9085 23.7421 10.846 23.7171C9.88922 23.3544 8.97623 22.9104 8.10076 22.407C8.02885 22.3663 8.02572 22.2694 8.08825 22.2194C8.27273 22.0818 8.4572 21.938 8.63542 21.7941C8.66669 21.766 8.71046 21.7629 8.74798 21.7785C14.5136 24.4112 20.7513 24.4112 26.4481 21.7785C26.4856 21.7597 26.5294 21.766 26.5638 21.791C26.7389 21.938 26.9234 22.0818 27.111 22.2194C27.1735 22.2694 27.1704 22.3663 27.1016 22.407C26.223 22.9197 25.31 23.3544 24.3533 23.7171C24.2907 23.7389 24.2626 23.8109 24.2907 23.8734C24.8223 24.8989 25.4257 25.8713 26.0886 26.7968C26.1167 26.8375 26.1667 26.8531 26.2136 26.8406C29.0902 25.9495 32.0074 24.605 35.0215 22.3945C35.0465 22.3757 35.0653 22.3444 35.0653 22.3132C35.8 14.7153 33.8365 8.11804 29.8593 2.26802C29.85 2.24613 29.8343 2.23362 29.8124 2.22424ZM11.7684 18.311C10.033 18.311 8.60416 16.7164 8.60416 14.7622C8.60416 12.8049 10.0049 11.2103 11.7684 11.2103C13.5443 11.2103 14.9607 12.8174 14.9326 14.7622C14.9326 16.7164 13.5318 18.311 11.7684 18.311ZM23.4715 18.311C21.7362 18.311 20.3073 16.7164 20.3073 14.7622C20.3073 12.8049 21.7081 11.2103 23.4715 11.2103C25.2475 11.2103 26.6639 12.8174 26.6357 14.7622C26.6357 16.7164 25.2475 18.311 23.4715 18.311Z" fill="white"/></svg></a>
        <a href="/#" className="transition transform hover:-translate-y-1"><svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.54359 4.87659C3.56196 4.69429 3.53737 4.5102 3.47181 4.33928C3.40626 4.16837 3.30159 4.01546 3.16632 3.89299L0.37727 0.505599V0H9.03953L15.7358 14.7979L21.6227 0H29.8827V0.505599L27.4959 2.81028C27.395 2.88789 27.3169 2.99173 27.2702 3.11065C27.2235 3.22957 27.2098 3.35908 27.2306 3.48525V20.4222C27.21 20.5482 27.2239 20.6774 27.2706 20.7961C27.3173 20.9148 27.3952 21.0184 27.4959 21.0959L29.8242 23.4006V23.9062H18.1077V23.4006L20.5195 21.0395C20.7561 20.8011 20.7561 20.7308 20.7561 20.3645V6.67567L14.0449 23.8485H13.1397L5.3266 6.67567V18.1853C5.26185 18.6695 5.42123 19.1563 5.75865 19.5063L8.89634 23.3454V23.8497H0V23.3441L3.13769 19.5051C3.47387 19.1563 3.62328 18.6645 3.54359 18.1853V4.87659Z" fill="white"/></svg></a>
      </div>
       </div>
    </div>

   </>
  );
}

export default App;
