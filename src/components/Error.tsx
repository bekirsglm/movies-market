const Error = ({ message = "Something went wrong. Please try again." }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black text-white px-5">

      <div className="relative bg-yellow-400/10 backdrop-blur-2xl border border-yellow-400/40 rounded-3xl px-10 py-10 text-center shadow-[0_0_60px_rgba(255,204,0,0.4)] space-y-5 max-w-md w-full">

        
        <div className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-2xl opacity-30"></div>

        <h1 className="relative text-6xl font-extrabold text-yellow-400 animate-pulse">
          Oops!
        </h1>

        <p className="relative text-gray-300 text-lg">
          {message}
        </p>

        <button
          onClick={handleReload}
          className="relative mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,204,0,0.8)] active:scale-95"
        >
          Try Again
        </button>

      </div>

    </div>
  );
};

export default Error;