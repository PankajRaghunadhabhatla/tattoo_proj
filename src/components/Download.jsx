import AppStoreImg from '../assets/app-store-black.png'
import PlayStoreImg from '../assets/play-store.png'
import Phone1 from '../assets/phone1.png'
import Phone2 from '../assets/phone2.png'

const Download = () => {
  return (
    <section className="my-36 w-full flex justify-center md:flex-row">
      <div className="bg-[#d9d0c1] h-full w-full md:w-5/6 lg:w-5/6 sm:flex-row p-4 justify-center block rounded-lg">
        {/* left side */}
        <div className="md:w-1/2 md:pr-4 flex flex-col justify-center py-[120px]">
          <h2 className="text-3xl text-center font-bold pb-4">Download the app today!</h2>
          <p className="text-lg sm:text-center">
            The best way to find quality tattoo artists, tattoo inspiration, and
            manage your appointments from the palm of your hand
          </p>
          <div className='flex justify-center gap-4 mt-4'>
          <a href="#">
            <img src={AppStoreImg} width={100} height={100} />
          </a>
          <a href='#'>
            <img src={PlayStoreImg} width={100} height={100} />
          </a>
          </div>
          {/* right side */}
          <div className='md:w-1/2 flex flex-wrap justify-center md:justify-start gap-2 mt-4'>
            <div className='absolute flex object-cover max-h-[600px] gap-3'>
            <img src={Phone1} width={300} height={200} className='relative top-[-370px] left-[550px]' />
            <img src={Phone2} width={300} height={200} className='relative top-[-370px] left-[550px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
