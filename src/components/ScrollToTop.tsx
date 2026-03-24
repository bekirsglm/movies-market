import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <div
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-5 right-5 bg-[#ffcc00] text-black p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-all duration-200"
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;