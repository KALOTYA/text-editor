import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
  //takes content and appends it to the DB
export const putDb = async (content) => {
  console.log('POSTdatabase');
  //connection creation
  const todosDb = await openDB('jate',1);
  //creating a transaction
  const tx = todosDb.transaction('jate','readwrite');
  const store = tx.objectStore('jate');
  //adding content to the database
  const request = store.add({jate: content});

  const result = await request;
  console.log('Data saved to the database', result);

}

// TODO: Add logic for a method that gets all the content from the database
//GET for the content
export const getDb = async () => {
  console.log('GET all from the database');
  //connection creation
  const todosDb = await openDB('jate', 1);
  //create transaction
  const tx = todosDb.transaction('jate','readonly');
  const store = tx.objectStore('jate');
  //GET for all the content
  const request = store.getAll();

  const result = await request;
  result
  console.log('result.value', result);
  return result?.value;
}

initdb();
