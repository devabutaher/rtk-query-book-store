import { useDispatch, useSelector } from "react-redux";
import {
  useAddBookMutation,
  useEditBookMutation,
} from "../redux/books/apiSlice";
import { editBookData } from "../redux/books/bookSlice";

const Form = () => {
  const [
    addBook,
    {
      isLoading: addBookLoading,
      isError: addBookError,
      isSuccess: addBookSuccess,
    },
  ] = useAddBookMutation();
  const [
    editBook,
    {
      isLoading: editBookLoading,
      isError: editBookError,
      isSuccess: editBookSuccess,
    },
  ] = useEditBookMutation();

  const { editData } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      author: form.author.value,
      price: form.price.value,
      rating: form.rating.value,
      thumbnail: form.thumbnail.value,
      featured: form.featured.checked,
    };

    if (editData.id) {
      editBook({ id: editData.id, data });
      dispatch(editBookData({}));
    } else {
      addBook(data);
    }

    form.reset();
  };

  return (
    <div className="p-4 overflow-hidden bg-white rounded-md shadow-cardShadow place-self-start">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            defaultValue={editData?.name ?? ""}
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            defaultValue={editData?.author ?? ""}
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            defaultValue={editData?.thumbnail ?? ""}
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              defaultValue={editData?.price ?? ""}
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              defaultValue={editData?.rating ?? ""}
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            defaultChecked={editData?.featured ?? ""}
            id="input-BookFeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="input-BookFeatured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {addBookLoading || editBookLoading
            ? "Loading..."
            : editData.id
            ? "Update Book"
            : "Add Book"}
        </button>

        {addBookSuccess && (
          <p className="py-1 text-center text-green-500">
            Book added successfully!
          </p>
        )}
        {editBookSuccess && (
          <p className="py-1 text-center text-green-500">
            Book edited successfully!
          </p>
        )}
        {addBookError && (
          <p className="py-1 text-center text-red-500">Book added failed!</p>
        )}
        {editBookError && (
          <p className="py-1 text-center text-red-500">Book edited failed!</p>
        )}
      </form>
    </div>
  );
};

export default Form;
