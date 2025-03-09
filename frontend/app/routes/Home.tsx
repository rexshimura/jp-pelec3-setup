import Navbar from "~/components/Navbar";

const Home = () => {
  return (
      <div className="p-4">
        <Navbar/>
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p>This is the home page content.</p>
      </div>
  );
};

export default Home;
