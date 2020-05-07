# Node, express, Postgres-Sequelize boiler-plate

# Dependencies
* "dotenv": "^8.2.0"
* "express": "^4.17.1"
* "pg": "^8.0.3"
* "pg-hstore": "^2.3.3"
* "sequelize": "^5.21.7"
* "sequelize-cli": "^5.5.1"

# Pre-run tasks
[Tutorial](https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp)
1. `npm i`
2. Delete `database` folder and run `sequelize init` to initialize.
3. Modify the `database/config/config.js` file like so:
  ```javascript
  "development": {
    "url": process.env.DEV_DB_URL,
    "dialect": "postgres"
  }
  ```
  > Note: Modify other envs as well.
4. Modify `models/index.js` file like so.
```javascript
let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
```
5. Create `models` and `migrations` using command:  
    `sequelize model:generate --name <model_name> --attributes <attributes>`  
    E.g.: `sequelize model:generate --name User --attributes name:string,email:string`
6. Modify the respective model files. Add their associations.
7. Run the command: `sequelize db:migrate` to create tables in the database.
8. Edit/Create the .env file
