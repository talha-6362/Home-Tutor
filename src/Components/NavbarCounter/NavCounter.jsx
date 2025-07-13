import CountUp from 'react-countup';

const NavCounter = () => {
  return (
    <div className="bg-secondary text-white py-12 sm:py-5">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
      
        {/* Expert Tutors Counter */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp start={0} end={898} duration={5} />
          </p>
          <p>Expert Tutors</p>
        </div>
        
        {/* Hours Content Counter */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp end={20000} separator="," suffix="+" duration={5} />
          </p>
          <p>Hours Content</p>
        </div>
        
        {/* Courses Available Counter */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp end={298} duration={5} />
          </p>
          <p>Courses Available</p>
        </div>
        
        {/* Active Students Counter */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp end={72878} separator="," suffix="+" duration={5} />
          </p>
          <p>Active Students</p>
        </div>

      </div>
    </div>
  );
};

export default NavCounter;
