import ChooseStateComponents from './ChooseState';
import HumidityComponents from './Humidity';
import LeftComponents from './Left';
import WeekInfoComponents from './WeekInfoCard';

const HomeComponests = () => {
  return (
    <>
      <div className='homeWrap'>
        <div className='weatherSection'>
          <LeftComponents />
          <div className='rightSide'>
            <ChooseStateComponents />
            <WeekInfoComponents />
            <HumidityComponents />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponests;
