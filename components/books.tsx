import { Badge } from "@/components/ui/badge";
import { books, bookCategories } from "@/data/books";

export function Books() {
  return (
    <section
      id="books"
      className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        Ideas That Shaped My Work
      </h2>
      <p className="mb-16 text-lg text-muted-foreground">
        Books that changed how I think about building products, managing
        attention, and creating leverage.
      </p>

      <div className="space-y-16">
        {bookCategories.map((category) => {
          const categoryBooks = books.filter((b) => b.category === category);
          return (
            <div key={category}>
              <h3 className="mb-8 text-2xl font-semibold text-foreground/90">
                {category}
              </h3>
              <div className="space-y-10">
                {categoryBooks.map((book) => (
                  <div
                    key={book.id}
                    className="border-l-2 border-accent/30 pl-6"
                  >
                    <h4 className="mb-1 text-xl font-semibold text-foreground">
                      {book.title}
                    </h4>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {book.author}
                    </p>
                    <p className="mb-3 text-base leading-relaxed text-foreground/80">
                      {book.takeaway}
                    </p>
                    <Badge variant="secondary" className="bg-secondary text-xs">
                      Applies to: {book.appliedTo}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
