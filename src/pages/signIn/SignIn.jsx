import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const location = useLocation();
  const { activeTab } = location.state || {};
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams(formData);
      const queryString = queryParams.toString();
      const url = `http://34.131.249.177:8000/users/login?${queryString}`;

      console.log("Constructed URL:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Account created successfully
        //alert("Account created successfully!");
        navigate("/dashBoard", { state: { activeTab } });
        // You can redirect the user to another page or perform any other action here
      } else {
        // Account creation failed
        alert("Account creation failed!");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      alert("An error occurred while creating the account.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container mx-auto h-screen px-4 py-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2  flex justify-center items-center">
          {activeTab !== "organization" && activeTab !== "educational" &&  (
            <div className="flex flex-col justify-center px-8 py-7 mt-8 bg-white rounded-md">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  alt="x"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a3bb95b557667529e1799bade4aa16c1163b5562eac2ef0ee3315f24260670?"
                  className="shrink-0 self-start w-12 aspect-[0.94]"
                />
                <div className="flex flex-col">
                  <div className="text-2xl text-slate-800">Individual User</div>
                  <div className="mt-1.5 text-base font-light leading-6 text-neutral-500">
                    I am a candidate and want to test my skills through mock
                    interviews.
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "organization" && (
            <div className="flex flex-col justify-center px-8 py-7 mt-5 bg-white rounded-md">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  alt="x"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/857369826d894bbb090fcbf80d186a2b33803a42d4a82b584e706a4ccd67f90c?"
                  className="shrink-0 self-start w-12 aspect-square"
                />
                <div className="flex flex-col">
                  <div className="text-2xl text-slate-800">Organization</div>
                  <div className="mt-1.5 text-base font-light leading-6 text-neutral-500">
                    I am an organization and want to outsource my interviews
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "educational" && (
            <div className="flex flex-col justify-center px-8 py-7 mt-5 bg-white rounded-md">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  alt="x"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e60a82cc2a2460c4e070453f9a1b2aad8a0a38d3ed980313177d151fa0049f3?"
                  className="shrink-0 self-start w-12 aspect-square"
                />
                <div className="flex flex-col">
                  <div className="text-2xl text-slate-800">
                    Educational Institution
                  </div>
                  <div className="mt-1.5 text-base font-light leading-6 text-neutral-500">
                    I am a candidate and want to test my skills through mock
                    interviews.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col grow px-5 mt-36 text-sm max-md:mt-10 max-md:max-w-full justify-center items-center">
            <Link to="/">
              <img
                width={179}
                height={43}
                src="./images/smartGraderLogo.png"
                alt="smart Grader"
              />
            </Link>
            {activeTab !== "organization" && activeTab !== "educational" && (
              <div className="self-center mt-5 text-2xl text-slate-800">
                Log In as Candidate
              </div>
            )}
            {activeTab === "organization" && (
              <div className="self-center mt-5 text-2xl text-slate-800">
                Log In as Organization
              </div>
            )}
            {activeTab === "educational" && (
              <div className="self-center mt-5 text-2xl text-slate-800">
               Log In as Student
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-5 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="justify-center items-start p-5 mt-2 leading-4 rounded-md border border-solid border-neutral-500 w-full pr-10 "
                />
              </div>

              <div className="flex flex-row justify-between gap-3 mt-6 leading-5  max-md:flex-wrap">
                <div className="flex flex-row gap-3 ">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreedToTerms: e.target.checked,
                      })
                    }
                    className="shrink-0 self-start rounded-md border border-solid border-neutral-500 h-[18px] w-[18px]"
                  />
                  <div className="text-gray-600 ">Remember Me </div>
                </div>
                <Link to='password'><div className="text-cyan-600">Forget Password?</div></Link>
              
              </div>
              <button
                className={`flex justify-center items-center px-4 py-5 mt-8 text-white bg-sky-500 rounded-md border border-sky-500 border-solid w-full ${
                  isPressed ? "bg-sky-600" : "bg-sky-500"
                }`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                type="submit"
              >
                <div className="flex gap-2.5 px-px">
                  <span>Create an Account</span>
                </div>
              </button>

              <div className="flex flex-col self-end mt-8 max-w-full leading-5 text-center w-[381px]">
                <div>
                  <span className="font-light text-gray-600">Don't have an account?</span>{" "}
                  <br />
                  <Link to="signIn">
                    <span className="text-cyan-600">Signup</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="flex gap-5 px-5 mt-10 pt-20 md:mt-20 md:pt-40 text-sm font-light leading-5 justify-center  text-center text-neutral-500 ">
      <div className="flex gap-5">Legal information </div>
      <div className="flex ">
        <div className="flex gap-5 ">Help Resources</div> 
        <img
          loading="lazy"
          alt=""
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88a0e7a6410adfd197105689cc2d240f8ae2219d2991fd8544613570b57adea6?"
          className="shrink-0 mx-5 aspect-[4.35] w-[93px]"
        />
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
