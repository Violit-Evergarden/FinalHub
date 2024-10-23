
import ColorMode from "../ColorMode";
import logoImg from '@/src/assets/images/name.png';
import personLogo from '@/src/assets/images/icons/person.svg';
import gitLogo from '@/src/assets/images/icons/gitlogo.svg';

function Header() {
  return (
    <header className="flex items-center justify-between h-60 pl-20 pr-20 box-border sticky top-0 shadow-md shadow-white-500/50 backdrop-blur transition-all dark:shadow-[0_4px_6px_-1px_rgb(255,255,255,0.1)] z-50">
      <div className="left">
        <img src={logoImg.src} alt="" />
      </div>
      <div className="flex">
        <ColorMode />
        <div className='w-32 h-32 flex justify-center items-center rounded-half cursor-pointer hover:bg-btn_hover_bg ml-6'>
          <img className='w-20 h-20 select-none' src={gitLogo.src} />
        </div>
        <div className='w-32 h-32 flex justify-center items-center rounded-half cursor-pointer hover:bg-btn_hover_bg ml-6'>
          <img className='w-20 h-20 select-none' src={personLogo.src} />
        </div>
      </div>
    </header>
  );
}

export default Header;
