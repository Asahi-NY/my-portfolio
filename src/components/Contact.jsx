import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className=" m-auto w-full max-w-[1240px] px-2 py-20">
        <p className=" text-xl font-bold uppercase tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">お問い合わせ</h2>
        <div className="mx-auto flex">
          {/* left */}
          {/* <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <img
                  className=" rounded-xl duration-300 ease-in hover:scale-105"
                  src="/assets/contact.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2 className=" py-2">Name here</h2>
                <p>Front-End Developer</p>
                <p className=" py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className=" pt-8 uppercase">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/yusuke-noguchi-97968b142/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/Asahi_YN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
                      <AiOutlineTwitter />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Asahi-NY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/#contact">
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 hover:scale-110">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          {/* right */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form
                onSubmit={handleSubmit}
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdtK5Q9yU-J2qcocw3KT9kYnQGmx6ZePzw03I8KHlPF2_OQjw/formResponse"
                method="POST"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className=" flex flex-col">
                    <label className=" py-2 text-sm uppercase">名前</label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      name="entry.776937792"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className=" flex flex-col">
                    <label className=" py-2 text-sm uppercase">電話番号</label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      name="entry.1365249447"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className=" flex flex-col py-2">
                  <label className=" py-2 text-sm uppercase">Eメール</label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="email"
                    name="entry.736737980"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className=" flex flex-col py-2">
                  <label className=" py-2 text-sm uppercase">件名</label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="text"
                    name="entry.754555934"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className=" flex flex-col py-2">
                  <label className=" py-2 text-sm uppercase">
                    メッセージ内容
                  </label>
                  <textarea
                    className="rounded-lg border-2 border-gray-300 p-3"
                    rows="10"
                    name="entry.1094764312"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <Link href="/#contact">
                  <button className="mx-auto mt-4 flex w-full max-w-[330px] items-center justify-center p-4 text-gray-100 hover:opacity-70">
                    送信
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
