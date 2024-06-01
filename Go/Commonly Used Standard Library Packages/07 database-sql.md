## database/sql package 

- **`database/sql`** `package is the standard` **`library for interacting with SQL databases`**. 
- `It provides a` **`generic interface`** `for working with SQL databases and allows developers to use different database drivers to connect to and interact with` **`various SQL databases like MySQL, PostgreSQL, SQLite, etc.`**



### Basic example

```go
package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql" // Import MySQL driver
)

func main() {
    
	// Open a connection to the MySQL database
    db, err := sql.Open("mysql", "root:password@tcp(localhost:3306)/laravle")
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()

    // Execute a query
    rows, err := db.Query("SELECT * FROM users")
    if err != nil {
        panic(err.Error())
    }
    defer rows.Close()

    // Iterate over the result set
    for rows.Next() {
        // Declare variables to store column values
        var id int
        var name,createdAt,updatedAt, email, password  string
        var emailVerifiedAt,rememberToken sql.NullString
    
         // Scan the values from the current row into variables
        if err := rows.Scan(&id, &name, &email, &emailVerifiedAt, &password, &rememberToken, &createdAt, &updatedAt); err != nil {
            panic(err.Error())
        }
        
        fmt.Println("ID:", id)
        fmt.Println("Name:", name)
        fmt.Println("Email:", email)
        fmt.Println("Password:", password)
        fmt.Println("Email Verified At:", emailVerifiedAt)
        fmt.Println("Remember Token:", rememberToken)
        fmt.Println("Created At:", createdAt)
        fmt.Println("Updated At:", updatedAt)
    }

    if err := rows.Err(); err != nil {
        panic(err.Error())
    }
}

//output
ID: 1
Name: Admin
Email: admin@admin.com
Password: $2y$10$GAErjOXsm.Qrma5U184s/OA3meQwRBAARn0vcitUKlyn.nwhZSzmm
Email Verified At: { false}
Remember Token: {VSnTu90jo4DLcQzsOz6LN0sK73J4Xnz7dU9nsdThWOHinhxswQ7fMLH6sNzI true}
Created At: 2023-06-21 04:03:11
Updated At: 2023-06-21 04:03:11
```



