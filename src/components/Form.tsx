const Form = () => {
  const editBook = {
    name: "test",
    author: "test",
    price: 0,
    rating: 0,
    thumbnail: "test",
    featured: false,
  };

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

    console.log("data:", data);

    form.reset();
  };

  return (
    <div className="p-4 overflow-hidden bg-white rounded-md shadow-cardShadow">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            defaultValue={editBook?.name ?? ""}
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
            defaultValue={editBook?.author ?? ""}
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
            defaultValue={editBook?.thumbnail ?? ""}
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
              defaultValue={editBook?.price ?? ""}
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
              defaultValue={editBook?.rating ?? ""}
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
            defaultChecked={editBook?.featured ?? ""}
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="input-Bookfeatured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {editBook !== null ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default Form;
