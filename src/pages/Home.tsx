import BookCard from "../components/BookCard";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <BookCard />
      <Form />
    </div>
  );
};

export default Home;
