import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [omOssOpen, setOmOssOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const omOssRef = useRef(null);
  const infoRef = useRef(null);
  const omOssTimeoutRef = useRef(null);
  const infoTimeoutRef = useRef(null);

  const toggleOmOss = () => setOmOssOpen(!omOssOpen);
  const toggleInfo = () => setInfoOpen(!infoOpen);

  const closeDropdowns = () => {
    setOmOssOpen(false);
    setInfoOpen(false);
  };

  const handleOmOssMouseEnter = () => {
    // Clear any pending close timeout
    if (omOssTimeoutRef.current) {
      clearTimeout(omOssTimeoutRef.current);
    }
    // Only open on hover for non-touch devices
    if (window.matchMedia("(hover: hover)").matches) {
      setOmOssOpen(true);
    }
  };

  const handleOmOssMouseLeave = () => {
    // Only close on mouse leave for non-touch devices with a small delay
    if (window.matchMedia("(hover: hover)").matches) {
      omOssTimeoutRef.current = setTimeout(() => {
        setOmOssOpen(false);
      }, 100);
    }
  };

  // Hover handlers for Information
  const handleInfoMouseEnter = () => {
    // Clear any pending close timeout
    if (infoTimeoutRef.current) {
      clearTimeout(infoTimeoutRef.current);
    }
    if (window.matchMedia("(hover: hover)").matches) {
      setInfoOpen(true);
    }
  };

  const handleInfoMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      infoTimeoutRef.current = setTimeout(() => {
        setInfoOpen(false);
      }, 100);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // Close Om Oss dropdown if clicked outside
      if (omOssRef.current && !omOssRef.current.contains(event.target)) {
        setOmOssOpen(false);
      }

      // Close Information dropdown if clicked outside
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setInfoOpen(false);
      }
    }

    // Add event listener when dropdowns are open
    if (omOssOpen || infoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [omOssOpen, infoOpen]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (omOssTimeoutRef.current) {
        clearTimeout(omOssTimeoutRef.current);
      }
      if (infoTimeoutRef.current) {
        clearTimeout(infoTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center border-b border-gray-400 p-4 ">
        <div className="font-bold md:text-m text-sm">
          Bostadsrättsföreningen
        </div>
        <div className="md:text-8xl text-4xl mt-2">
          <Link to="/">Västhaga Nr 4</Link>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 md:space-x-8 lg:space-x-12 p-4 border-b border-gray-400">
        {/*Hem*/}
        <div className="font-medium hover:text-gray-600 focus:outline-none text-sm md:text-lg md:font-semibold">
          <Link to="/" className="block px-4 py-2 ">
            Hem
          </Link>
        </div>

        {/*Om oss*/}
        <div
          className="relative"
          ref={omOssRef}
          onMouseEnter={handleOmOssMouseEnter}
          onMouseLeave={handleOmOssMouseLeave}
        >
          <button
            onClick={toggleOmOss}
            className="font-medium hover:text-gray-600 focus:outline-none text-sm md:text-lg md:font-semibold"
          >
            Om Oss
          </button>
          {omOssOpen && (
            <div
              className="absolute z-10 mt-2 w-28  bg-white border border-gray-200 rounded-md shadow-lg dark:text-[#121212]"
              onMouseEnter={handleOmOssMouseEnter}
              onMouseLeave={handleOmOssMouseLeave}
            >
              <Link
                to="/Board"
                onClick={closeDropdowns}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Styrelsen
              </Link>
              <Link
                to="/Stadgar"
                onClick={closeDropdowns}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Stadgar
              </Link>
              <Link
                to="/Plans"
                onClick={closeDropdowns}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Planer
              </Link>
              <Link
                to="/PerformedPlans"
                onClick={closeDropdowns}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Utförda Planer
              </Link>
            </div>
          )}
        </div>
        {/* Information */}
        <div
          className="relative"
          ref={infoRef}
          onMouseEnter={handleInfoMouseEnter}
          onMouseLeave={handleInfoMouseLeave}
        >
          <button
            onClick={toggleInfo}
            className="font-medium hover:text-gray-600 focus:outline-none text-sm md:text-lg md:font-semibold"
          >
            Information
          </button>
          {infoOpen && (
            <div className="absolute z-10 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 dark:text-[#121212]">
              <Link
                to="/Styrelseinfo"
                onClick={closeDropdowns}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Styrelsen informerar
              </Link>
              <Link
                to="/Regler"
                onClick={closeDropdowns}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Regler
              </Link>
            </div>
          )}
        </div>
        {/* Felanmälan direct link */}
        <Link
          to="/Felanmälan"
          className="font-medium hover:text-gray-600 focus:outline-none text-sm md:text-lg md:font-semibold"
        >
          Felanmälan
        </Link>
      </div>
    </div>
  );
}
