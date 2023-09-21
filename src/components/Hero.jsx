import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center mb-10 w-full pt-3'>
        <img src={logo} alt='logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() => window.open("https://github.com/adeshdaniel")}
          className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summerize Articles With <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with summeries, an open source article summerizer
        that lengthy articles into clear and concise summeries
      </h2>
    </header>
  );
};

export default Hero;
