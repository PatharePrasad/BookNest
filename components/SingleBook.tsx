import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { BadgeMinus, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Dispatch } from "react";

interface SingleBookProps {
  book: Book;
  dispatch: Dispatch<Action>;
}

function SingleBook({ book, dispatch }: SingleBookProps) {
  return (
    <div>
      <Card className="w-90">
        <CardHeader>
          <CardTitle className="text-4xl">{book.title}</CardTitle>
          <CardDescription className="text-l"> ❤️ {book.likes}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xl">{book.author}</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button 
            variant="outline"
            onClick={() => dispatch({ type: "like", payload: { id: book.id } })}
          >
            <ThumbsUpIcon />
            Like
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              dispatch({ type: "dislike", payload: { id: book.id } })
            }
          >
            <ThumbsDownIcon />
            Dislike
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              dispatch({ type: "delete", payload: { id: book.id } })
            }
          >
            <BadgeMinus />
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SingleBook;
