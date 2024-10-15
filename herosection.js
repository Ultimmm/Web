const HeroSection = () => {
  return (
    <section className="relative bg-gray-800 text-white py-16">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold">Breaking News</h1>
        <p className="mt-4 text-lg">Catch the latest updates around the world.</p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
