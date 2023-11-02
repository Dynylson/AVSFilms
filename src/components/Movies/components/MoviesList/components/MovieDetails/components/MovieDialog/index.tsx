import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, useState } from 'react';

type MovieDialogProps = {
    movieProps: any;
    children: ReactNode;
}

export function MovieDialog({ movieProps, children }: MovieDialogProps) {
    const [open, setOpen] = useState(false);

    function onOpenChange(open: boolean) {
        setOpen(open);
    }

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>

        <Dialog.DialogOverlay />
        <Dialog.DialogContent>
          <Dialog.DialogClose>
            {/* <X size={24} /> */}
          </Dialog.DialogClose>
          {true ? (
            <p>
              Carregando...
            </p>
          ) : (
            <>
              <div>
                <div>
                  <img width={171} height={242} /* alt={book.name} src={book.cover_url} *//>
                  <div>
                    <div>
                      <h1>teste</h1>
                      <h2 color="gray-300" style={{ marginTop: "$2" }}>teste</h2>
                    </div>

                    <div>
                      {/* <RatingStars rating={book.avgRating} size="md" /> */}
                      {/* <h2 color="gray-400" style={{ marginTop: "$1" }}>{ratingsLength} {ratingsLength === 1 ? "avaliação" : "avaliações"}</h2> */}
                    </div>
                  </div>
                </div>

                <div>
                  {/* <BookInfo icon={<BookmarkSimple />} title="Categorias" info={categories} /> */}
                  {/* <BookInfo icon={<BookOpen />} title="Páginas" info={String(book.total_pages)} /> */}
                </div>
              </div>

              {/* <BookRatings bookId={bookId} ratings={book.ratings} /> */}
            </>
          )}
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
    )
}