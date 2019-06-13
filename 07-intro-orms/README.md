# Intro to ORMs (Object Relational Mappers)

## Objectives

* Define Object Relational Mapper \(ORM\)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting ruby (scripting languages) and databases
* Explain the Active Record Pattern
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions using Ruby


```
books
id   | title                             
-----------------------------------------
1      "POODR"                                    
2      "Surviving Peanuts"                         
3      "99 Bottles of OOP"                              
4      "Sandi teaches Kevin to code"              


authors
id    |    name
------------------------
1         "Sandi Metz"
2         "Kevin McAlear"


books_authors
id |  author_id | book_id
--------------------------
1       1             1
2       2             2
3       1             3
4       1             4


```


### CRUD relationships sql vs ruby

## Create
- `INSERT INTO book (title) VALUES ("POODR 2");`
- `book = Book.new("POODR 2")`
- `book.save`
- `Book.create("POODR 2")`


## Read
- `SELECT * FROM books;`
- `Book.all`

- `SELECT * FROM books WHERE id = 1;`
- `Book.find(1)`
- `Book.find_by_id(1)`

- `SELECT * FROM books WHERE title = "POODR";`
- `Book.find_by_title("POODR")`


## Update
- `UPDATE books SET (title) VALUES ("The Peanuts never stop...") WHERE id = 2;`
- `book = Book.find(2)`
- `book.update_title("The Peanuts never stop...")`


## Destroy
- `DELETE books WHERE id = 3;`
- `book = Book.find(3)`
- `book.destroy`
