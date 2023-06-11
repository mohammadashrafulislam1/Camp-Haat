
const PopularSection = () => {
  return (
    <section className="bg-purple-700 py-16 px-10">
    <div className="container mx-auto">
      <h2 className="text-5xl text-white text-center font-bold mb-8">Welcome to Our Website</h2>
      <p className="text-lg text-white text-center mb-12">Here you can do and explore several activities:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded shadow p-8">
          <h3 className="text-2xl text-purple-700 font-semibold mb-4">ADD CLASSES</h3>
          <p className="text-gray-700">If you are a teacher you can create class related to drawing.</p>
        </div>
        <div className="bg-white rounded shadow p-8">
          <h3 className="text-2xl text-purple-700 font-semibold mb-4">EXPLORE AS A STUDENT</h3>
          <p className="text-gray-700">Student can purchase any course or courses in order to make them skillful.</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PopularSection;
