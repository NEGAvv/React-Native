import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("cryptos.db");

export const createTable = (name) => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ${name} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          amountToBuy REAL,
          name TEXT,
          dollarCurrency REAL
        )`,
      [],
      (_, result) => {
        console.log("Table created");
      },
      (_, error) => {
        console.error("Error with creating table: ", error);
      }
    );
  });
};

export const insertData = (dataArr) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO crypto (amountToBuy, name, dollarCurrency) VALUES (?, ?, ?)",
      dataArr,
      (_, result) => {
        console.log("Value inserted");
      },
      (_, error) => {
        console.error("Error with value: ", error);
      }
    );
  });
};

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM crypto",
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const deleteTable = (name) => {
  db.transaction((tx) => {
    tx.executeSql(
      `DROP TABLE IF EXISTS ${name}`,
      [],
      (_, result) => {
        console.log("Table deleted successfully.");
      },
      (_, error) => {
        console.error("Error deleting table:", error);
      }
    );
  });
};