import modelpicture from '../assets/fashion-model.jpg';

// eslint-disable-next-line react/prop-types
function Initialversion({ handleClick }) {
  return (
    <>
      <header>Shop Online</header>
      <main>
        <div className='wrap'>
          <img
            src={modelpicture}
            className='model-picture'
            alt='model picture'
          />
          <div className='ad-message'>
            <p> Autumn Flash Sale 30% Off</p>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Non arcu risus quis varius.
            </p>
            <button className='button' onClick={handleClick}>
              {' '}
              Shop now{' '}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Initialversion;
