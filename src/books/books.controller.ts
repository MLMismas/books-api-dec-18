import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Get()
    getAllBooks() {
        return {
            books: [
                { id: '32', title: 'War of the World', author: 'Wells', yearPublished: 1937 },
                { id: '18', title: 'Infinitie Jest', author: 'Dave Wallace', yearPublished: 1994 },
            ],
        };
    }
}
