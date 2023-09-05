// Generate a unique ID.
// IDs are auto-incremented, starting at 0 (just like auto-incrementing database keys).
// Normally, this would be done by the database, but we don't have a database.
// Also, we're starting at 4 because our test data already has IDs 0, 1, 2, and 3.
//
// To use the generator, create a generator instance:
//   const idGenerator = idGenerator(4);
// Then, to get the next ID, call the generator's next() method:
//   const id = idGenerator.next().value;
function* idGenerator(initialId) {
  let id = initialId ?? 0;
  while (true) {
    yield id;
    id += 1;
  }
}

export default idGenerator;
