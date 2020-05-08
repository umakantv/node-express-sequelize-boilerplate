# Node, express, Postgres-Sequelize boiler-plate

# Dependencies
* "dotenv": "^8.2.0"
* "express": "^4.17.1"
* "pg": "^8.0.3"
* "pg-hstore": "^2.3.3"
* "sequelize": "^5.21.7"
* "sequelize-cli": "^5.5.1"

# Pre-run tasks
[Tutorial](https://dev.to/nedsoft/performing-crud-with-sequelize-29cf)
1. Clone from master branch and follow its steps to start from here.
```javascript
// Associations are defined as
// Author
//   \
//    \
//   Book

Author.hasMany(models.Book, {
  foreignKey: 'authorId',
  as: 'books',
  onDelete: 'CASCADE'
});

Book.belongsTo(models.Author, {
  foreignKey: 'authorId',
  as: 'authors'
});
  
```

> Note: For belongsTo type associations, foreignKey is an attribute of self table  
> But for hasMany type associations, foreignKey is attribute of child table

2. Create controllers and add them to routes.