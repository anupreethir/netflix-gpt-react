// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import InfoIcon from '@mui/icons-material/Info';
// const VideoTitle = ({ title, overview }) => {
//     return (
//         <div className='absolute top-0 right-0 bottom-0 left-0 h-[100%] w-[100%] z-20'>
//             <div className="md:w-[40%] w-[45%] aspect-video absolute left-[0%] md:top-[45%] sm:top-[25%] sm:w-[50%] top-[11%] text-white" >
//                 <h1 className="md:text-3xl sm:text-xl  text-base font-semibold mb-1 md:mb-5">{title}</h1>
//                 <p className='hidden sm:hidden lg:inline-block'>{overview}</p>
//                 <button className='md:px-[20px] md:py-[3px]  px-2 rounded-sm bg-white text-sm md:text-lg  font-medium mr-2 text-black md:mt-[5%] hover:bg-opacity-80'><PlayArrowIcon className='relative right-1' />Play</button>
//                 <button className='md:px-[20px] md:py-[3px]  px-2 rounded-sm text-white text-sm md:text-lg  font-medium  bg-black bg-opacity-60 hover:bg-opacity-90'><InfoIcon className='relative right-1 p-[1.5px]' />More Info</button>

//             </div>
//         </div>
//     )
// }
// export default VideoTitle;


import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' md:w-[40%] w-[40%] absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-[90%]  sm:-translate-y-[85%] md:-translate-y-[90%] lg:-translate-y-[100%] z-30 text-white'>
            <div className="aspect-video text-center">
                <h1 className="md:text-2xl sm:text-xl lg:text-3xl text-base lg:font-bold  font-semibold mb-1 md:mb-3 text-left">{title}</h1>
                <p className='hidden sm:hidden md:inline-block lg:inline-block lg:text-lg text-left '>{overview}</p>
                <div className='absolute left-0 flex justify-between mt-[2%] items-center'>
                    <button className='md:px-[20px] md:py-[3px] sm:px-2 sm:py-[3px] px-[3px] py-[3px] rounded-sm bg-white text-sm md:text-lg font-medium mr-2 text-black  hover:bg-opacity-80 flex items-center justify-center max-h-[20px] sm:max-h-[25px] md:max-h-[30px] lg:min-h-[35px] lg:text-xl'>
                        <PlayArrowIcon className='relative right-1 max-h-[20px] sm:max-h-[15px] md:max-h-[30px]' />Play
                    </button>
                    <button className='md:px-[20px] md:py-[3px] sm:px-2 sm:py-[3px] px-[3px] py-[3px] rounded-sm text-white text-sm md:text-lg font-medium bg-black bg-opacity-60 hover:bg-opacity-90 flex items-center justify-center max-h-[20px] sm:max-h-[25px] md:max-h-[30px] lg:min-h-[35px] lg:text-xl whitespace-nowrap'>
                        <InfoIcon className='relative right-1 p-[1.5px] max-h-[20px] sm:max-h-[15px] md:max-h-[30px] ' />More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;
