import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Manager = () => {
  const [Togglestate, setTogglestate] = useState(true);
  const [Form, setForm] = useState({ site: "", username: "", password: "" });
  const [PasswordArray, setPasswordArray] = useState([]);
  const ToggleEye = () => {
    setTogglestate((prev) => !prev);
  };

  useEffect(() => {
    let passowrds = localStorage.getItem("passwords");
    if (passowrds) {
      setPasswordArray(JSON.parse(passowrds));
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...PasswordArray, Form]);
    localStorage.setItem("passwords", JSON.stringify([...PasswordArray, Form]));
    console.log([...PasswordArray, Form]);
  };

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <div className="container my-5 mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">
            <span className="text-2xl font-bold text-black">&lt;Pass</span>
            <span className="text-2xl font-bold text-green-500">OP /&gt;</span>
          </h1>
          <p className="text-sm  capitalize ">your Own passowrd manager</p>
        </div>

        <div className="   flex flex-col p-4">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="site"
            value={Form.site}
            placeholder="Enter your Website Url"
            className="border py-1 px-3 placeholder:text-sm  border-green-500 w-full  my-3 rounded-lg"
          />
          <div className="flex items-center gap-3 ">
            <input
              onChange={(e) => handleChange(e)}
              value={Form.username}
              type="text"
              name="username"
              className="bg-white/50 w-2/3 mr-3 border border-green-600 text-black text-lg  px-2  py-1  placeholder:text-sm rounded-md"
              placeholder="Enter Your Username"
            />
            <div className="border flex items-center gap-3 px-4 border-green-500 rounded-lg bg-transparent w-1/3 mr-3">
              <input
                onChange={(e) => handleChange(e)}
                value={Form.password}
                type={Togglestate ? "password" : "text"}
                name="password"
                className="outline-none   text-black text-lg placeholder:text-sm  py-1 px-2 rounded-md"
                placeholder="Enter your Password"
              />
              <button onClick={() => ToggleEye()}>
                {Togglestate ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="my-3 flex items-center justify-center">
            <button
              onClick={savePassword}
              className="bg-green-300 text-black  flex items-center justify-center gap-3 font-bold rounded-lg px-3 py-2 w-fit"
            >
              <lord-icon
                src="https://cdn.lordicon.com/sjoccsdj.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#121331,secondary:#1b1091"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto px-40">
        <h2 className="text-xl  my-3">Your passwords</h2>

        {PasswordArray.length === 0 && (
          <div>No Password is avaiable to show</div>
        )}

        {PasswordArray.length != 0 && (
          <div class="relative rounded-md overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Website Url
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody>
                {PasswordArray.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.site}
                      </th>
                      <td class="px-6 py-4">{item.username}</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">{item.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manager;
