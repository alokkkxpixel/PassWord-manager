import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // CSS for tooltip
import "tippy.js/animations/scale.css";
// import "tippy.js/animations/fade.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-toward.css";
import { ToastContainer, toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
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
    setPasswordArray([...PasswordArray, { ...Form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...PasswordArray, { ...Form, id: uuidv4() }])
    );
    toast("Password Saved!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      //   transition: "Bounce",
    });
    setForm({ site: "", username: "", password: "" });
    // console.log([...PasswordArray, Form]);
  };

  const DeletePassword = (id) => {
    const c = confirm("You really want to Delete this Passowrd?");

    console.log(c);
    if (c === true) {
      setPasswordArray(PasswordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(PasswordArray.filter((item) => item.id !== id))
      );
      toast("Password is Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        //   transition: "Bounce",
      });
      console.log("this password is deleted of id", id);
    }
  };
  const editPassword = (id) => {
    console.log("this pass is edited of id ", id);
    setForm(PasswordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(PasswordArray.filter((item) => item.id !== id));
  };
  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const Copytext = (text) => {
    toast("🦄 Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      //   transition: "Bounce",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition={"Bounce"}
      />
      
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Background */}
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-5 md:max-w-4xl">
          {/* Header */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl font-semibold">
              <span className="font-bold text-black">&lt;Pass</span>
              <span className="font-bold text-green-500">OP /&gt;</span>
            </h1>
            <p className="text-sm md:text-base capitalize">
              your Own password manager
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col p-2 gap-3 md:p-4">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="site"
              value={Form.site}
              placeholder="Enter your Website Url"
              className="border py-2 px-3 placeholder:text-sm border-green-500 w-full my-2 md:my-3 rounded-lg"
            />

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-3">
              <input
                onChange={(e) => handleChange(e)}
                value={Form.username}
                type="text"
                name="username"
                className=" w-full md:w-2/3 border border-green-600 text-black text-lg px-2 py-1 placeholder:text-sm rounded-md"
                placeholder="Enter Your Username"
              />

              <div className="border flex items-center gap-2 md:gap-3 px-3 md:px-4 border-green-500 rounded-lg bg-transparent w-full md:w-1/3">
                <input
                  onChange={(e) => handleChange(e)}
                  value={Form.password}
                  type={Togglestate ? "password" : "text"}
                  name="password"
                  className="outline-none text-black text-lg placeholder:text-sm py-1 px-2 rounded-md flex-grow"
                  placeholder="Enter your Password"
                />
                <button onClick={() => ToggleEye()} className="flex-shrink-0">
                  {Togglestate ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="my-3 flex items-center justify-center">
              <button
                onClick={savePassword}
                className="bg-green-400 text-black flex items-center justify-center gap-2 md:gap-3 font-bold rounded-lg px-3 py-2 w-full md:w-fit"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/sjoccsdj.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#121331,secondary:#1b1091"
                  style={{ width: "24px", height: "24px" }}
                ></lord-icon>
                Save Password
              </button>
            </div>
          </div>
        </div>

        {/* Password List */}
        <div className="container mx-auto px-0 md:px-10 lg:px-24 py-5 overflow-">
          <h2 className="text-xl my-3">Your passwords</h2>

          {PasswordArray.length === 0 && (
            <div className="text-center py-5">
              No Password is available to show
            </div>
          )}

          {PasswordArray.length != 0 && (
            <div className="relative  rounded-md overflow-x-scroll shadow-sm border border-gray-200">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gradient-to-tl from-lime-200 via-green-400 to-emerald-600 dark:text-black">
                  <tr>
                    <th scope="col" className="px-2 py-3 md:px-3 md:py-3">
                      Website Url
                    </th>
                    <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                      Username
                    </th>
                    <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                      Password
                    </th>
                    <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PasswordArray.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white text-black border-b dark:bg-green-100 dark:border-gray-700 border-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-4 py-4 md:px-6 md:py-4 flex items-center gap-2 text-gray-900 whitespace-nowrap font-semibold"
                        >
                          <a
                            href={item.site}
                            className="truncate max-w-[100px] text-sm text-wrap md:max-w-none"
                          >
                            {item.site}
                          </a>
                          <Tippy
                            content="Copy Url"
                            animation="shift-away"
                            delay={[400, 100]}
                          >
                            <button
                              onClick={() => {
                                Copytext(item.site);
                              }}
                            >
                              <FaRegCopy />
                            </button>
                          </Tippy>
                        </th>
                        <td className="px-4 py-4 md:px-6 md:py-4 font-semibold">
                          <span className="truncate max-w-[80px] md:max-w-none inline-block">
                            {item.username}
                          </span>
                          <Tippy
                            content="Copy Username"
                            animation="shift-away"
                            delay={[400, 100]}
                          >
                            <button
                              className="ml-2"
                              onClick={() => {
                                Copytext(item.username);
                              }}
                            >
                              <FaRegCopy />
                            </button>
                          </Tippy>
                        </td>
                        <td className="px-4 py-4 md:px-6 md:py-4 font-semibold">
                          <span
                            className={`inline-block ${
                              item.password.length === 3
                                ? "w-[40px]"
                                : "max-w-[80px]"
                            } md:max-w-none truncate text-wrap text-xs`}
                          >
                            {}
                          </span>
                          <Tippy
                            content="Copy Password"
                            animation="shift-away"
                            delay={[400, 100]}
                          >
                            <button
                              className="ml-2"
                              onClick={() => {
                                Copytext(item.password);
                              }}
                            >
                              <FaRegCopy />
                            </button>
                          </Tippy>
                        </td>
                        <td className="px-4 py-4 md:px-6 md:py-4">
                          <div className="flex gap-3 md:gap-5">
                            <Tippy
                              content="Edit Password"
                              animation="shift-away"
                              delay={[400, 100]}
                            >
                              <button
                                onClick={() => {
                                  editPassword(item.id);
                                }}
                              >
                                <FaEdit size={18} />
                              </button>
                            </Tippy>
                            <Tippy
                              content="Delete Password"
                              animation="shift-away"
                              delay={[400, 100]}
                            >
                              <button
                                onClick={() => {
                                  DeletePassword(item.id);
                                }}
                              >
                                <MdDelete size={18} />
                              </button>
                            </Tippy>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
