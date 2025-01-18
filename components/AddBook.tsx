import React, { Dispatch, FormEvent, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowDown01Icon, CrossIcon } from "lucide-react";

interface AddBookProps {
  dispatch: Dispatch<Action>;
}

function AddBook({ dispatch }: AddBookProps) {
  const bookTitle = useRef<HTMLInputElement>(null);
  const bookAuthor = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!bookTitle.current || !bookAuthor.current) return;

    const bookTitleValue = bookTitle.current.value;
    const bookAuthorValue = bookAuthor.current.value;

    dispatch({
      type: "add",
      payload: { title: bookTitleValue, author: bookAuthorValue },
    });

    // Empty the input fields
    bookTitle.current.value = "";
    bookAuthor.current.value = "";
  };

  return (
    <form
  className="max-w-lg mx-auto my-12 p-6 flex flex-col gap-4"
  onSubmit={handleSubmit}
>
<Input
  placeholder="Book title"
  ref={bookTitle}
  required
  className="p-5 text-xl border-0 border-b border-gray-400 rounded-none"
/>


  <Input
    placeholder="Author"
    ref={bookAuthor}
    required
    className="p-5 text-xl border-0 border-b border-gray-400 rounded-none"
  />
  <div className="flex gap-4 mt-4">
    <Button
      variant="outline"
      type="button"
      className="flex items-center gap-2 px-6 py-5 text-lg hover:border-blue-500 hover:text-blue-500"
      onClick={() => dispatch({ type: "sort" })}
    >
      <ArrowDown01Icon className="w-6 h-6" /> Sort
    </Button>
    <Button
      type="submit"
      className="flex items-center gap-2 px-6 py-5 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      <CrossIcon className="w-6 h-6" /> Add
    </Button>
  </div>
</form>

  );
}

export default AddBook;
