import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className="logo">
                <img className='w-[470px] mb-5 mt-5' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400 text-[20px]'>Journalism without fear or Favour</h2>
            <p className='text-[#706f6f] text-[18px] font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;