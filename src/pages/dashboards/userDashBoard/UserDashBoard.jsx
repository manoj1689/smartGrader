import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom' 
function UserDashBoard(props) {
  const [cardsData, setCardsData] = useState([]);
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://34.131.249.177:8000/sets/all?sub_category_id=10', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            // Add your token header here if required
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCardsData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  const handleCardClick = (id) => {
    navigate(`/signIn/dashboard/question/${id}`);
  };

  return (
    <div className="px-4 py-4 flex flex-row">
      <div className="flex flex-col px-10 py-5 bg-white border-r border-solid border-black border-opacity-10">
        <div className="flex  mb-8">
        <img className='h-8' src='../images/smartGraderLogo.png' alt="smart Grader" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between self-start px-px text-base">
            <div className="flex gap-3">
              <div className="flex flex-col my-auto">
                <div className="font-light leading-[150%] text-neutral-500">
                  Welcome!
                </div>
                <div className="mt-2.5 leading-[100%] text-slate-800">
                  {props.individualData.name}
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ab6f2493bc7f6254ec22b4ea860b52cc9ca6fb726427d72283b074d65eb70b9?"
              className="shrink-0 self-start mt-2.5 aspect-[4.35] w-[13px]"
            />
          </div>
          <div className="shrink-0 self-start mt-5 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
          <div
            className={`flex gap-2 mt-7 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Dashboard' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <div className="flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square">
              <img
                loading="lazy"
                alt="icon"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8fd369eed5249898922030772c2767223a956d7cbbfec314e96ac763671efb?"
                className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="flex-auto my-auto">
              Dashboard
            </div>
          </div>
          <div
            className={`flex gap-2 mt-7 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Mock Interviews' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Mock Interviews')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9986a12bb134a1073bac464361a9e56a52cbd38f5581cec938a55959604ee5d?"
              className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto my-auto">Mock Interviews</div>
          </div>
          <div
            className={`flex gap-2 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Progress Tracker' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Progress Tracker')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea158ca81ca036e0424dd2095b2555f3f16d5b7bf6f55822fc548cd23436bb4?"
              className="shrink-0 self-start aspect-[1.14] w-[17px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto">Progress Tracker</div>
          </div>
          <div
            className={`flex gap-2 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Quick Access' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Quick Access')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05341026f5ad1893ba1609ad6de1ee0d029b8f640153ce85a8cb046046721d71?"
              className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto">Quick Access</div>
          </div>
          <div className="shrink-0 self-start mt-96 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
          <div
            className={`flex gap-2 mt-12 ml-4 text-base leading-4 whitespace-nowrap cursor-pointer transition duration-300 ${
              activeItem === 'Settings' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Settings')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24349ad5042312e50be0c6d5bcaca1ef4ca22b96ae99f43efb72112df1e7441?"
              className="shrink-0 aspect-square w-[19px] transition-transform duration-300 transform hover:scale-110"
            />
            <div>Settings</div>
          </div>
          <div
            className={`flex gap-1.5 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Help & Support' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Help & Support')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9bf7d7f2cbc11aebaef6ed2889430e122ca8ee6948d0ceabbe6c7bfeb8636b?"
              className="shrink-0 aspect-square w-[21px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto my-auto">Help & Support</div>
          </div>
        </div></div>
    <div >
    <div>Hello {props.individualData.name}</div>
        <button onClick={handleLogout} type='button' className='bg-red-400'>Logout</button>
        </div>
        <div className='flex flex-row h-72 gap-5 mt-20 '>
  {cardsData.map((card) => (
    <div key={card.id} className="p-6 bg-gray-200 rounded-sm shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out" onClick={() => handleCardClick(card.id)}>
      <img src={card.img_url} alt={card.title} className="h-10 w-full object-cover mb-4 rounded-md" />
      <div className="text-gray-800">
        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
        <p className="text-sm mb-2">{card.description}</p>
        <p className="text-sm mb-2">Duration: {card.duration} minutes</p>
        <p className="text-sm mb-2">Level: {card.level}</p>
        <p className="text-sm mb-2">Questions Count: {card.questions_count}</p>
        <p className="text-sm mb-2">Rating: {card.rating}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default UserDashBoard