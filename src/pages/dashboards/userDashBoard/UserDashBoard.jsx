import React from 'react'
import { useNavigate } from 'react-router-dom'
function UserDashBoard(props) {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("loggedIn")
        navigate("/")
    }
  return (
    <div className="px-4 py-4 flex flex-row">
       <div className="flex flex-col justify-center px-1 max-w-[257px]">
      <div className="flex flex-col pt-8 pb-20 bg-white border-r border-solid border-black border-opacity-10">
        <div className='flex justify-center items-center' >
        <img width={179} height={43} src='../images/smartGraderLogo.png' alt="smart Grader" />
        </div>
        <div className="flex flex-col items-center pl-8 mt-11 mb-[783px]">
          <div className="flex gap-5 justify-between self-start px-px text-base">
            <div className="flex gap-3">
            *-*
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
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ab6f2493bc7f6254ec22b4ea860b52cc9ca6fb726427d72283b074d65eb70b9?"
              className="shrink-0 self-start mt-2.5 aspect-[4.35] w-[13px]"
            />
          </div>
          <div className="shrink-0 self-start mt-5 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
          <div className="flex gap-2 self-start px-6 py-3 mt-7 bg-sky-50 rounded-md">
            <div className="flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square">
              <img
                loading="lazy"
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8fd369eed5249898922030772c2767223a956d7cbbfec314e96ac763671efb?"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8fd369eed5249898922030772c2767223a956d7cbbfec314e96ac763671efb?"
                className="w-full aspect-square"
              />
            </div>
            <div className="flex-auto my-auto text-base leading-4 text-slate-800">
              Dashboard
            </div>
          </div>
          <div className="flex gap-2 mt-7 text-base leading-4 text-neutral-500">
            <img
              loading="lazy"
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9986a12bb134a1073bac464361a9e56a52cbd38f5581cec938a55959604ee5d?"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="flex-auto my-auto">Mock Interviews</div>
          </div>
          <div className="flex gap-2 mt-10 text-base leading-4 text-neutral-500">
            <img
              loading="lazy"
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea158ca81ca036e0424dd2095b2555f3f16d5b7bf6f55822fc548cd23436bb4?"
              className="shrink-0 self-start aspect-[1.14] w-[17px]"
            />
            <div className="flex-auto">Progress Tracker</div>
          </div>
          <div className="flex gap-2 mt-10 text-base leading-4 text-neutral-500">
            <img
              loading="lazy"
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05341026f5ad1893ba1609ad6de1ee0d029b8f640153ce85a8cb046046721d71?"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="flex-auto">Quick Access</div>
          </div>
          <div className="shrink-0 self-start mt-96 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
          <div className="flex gap-2 mt-12 ml-4 text-base leading-4 whitespace-nowrap text-neutral-500">
            <img
              loading="lazy"
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24349ad5042312e50be0c6d5bcaca1ef4ca22b96ae99f43efb72112df1e7441?"
              className="shrink-0 aspect-square w-[19px]"
            />
            <div>Settings</div>
          </div>
          <div className="flex gap-1.5 mt-10 text-base leading-4 text-neutral-500">
            <img
              loading="lazy"
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9bf7d7f2cbc11aebaef6ed2889430e122ca8ee6948d0ceabbe6c7bfeb8636b?"
              className="shrink-0 aspect-square w-[21px]"
            />
            <div className="flex-auto my-auto">Help & Support</div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2">
        <div>Hello {props.individualData.name}</div>
        <button onClick={handleLogout} type='button' className='bg-red-400'>Logout</button>
        </div>
    </div>
  )
}

export default UserDashBoard