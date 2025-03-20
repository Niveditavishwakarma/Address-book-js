const AddressBook = require("./addressBook");

const addressBook = new AddressBook();

try {
  addressBook.addContact(
    new Contact(
      "John",
      "Doe",
      "1234 Street",
      "New York",
      "California",
      "100001",
      "9876543210",
      "john.doe@example.com"
    )
  );
  addressBook.addContact(
    new Contact(
      "Jane",
      "Smith",
      "5678 Road",
      "Los Angeles",
      "California",
      "900002",
      "9876543220",
      "jane.smith@example.com"
    )
  );
  addressBook.addContact(
    new Contact(
      "Alice",
      "Brown",
      "789 Main St",
      "Chicago",
      "Illinois",
      "60601",
      "9876543230",
      "alice.brown@example.com"
    )
  );
} catch (error) {
  console.error(error.message);
}

console.log("\n🔍 Searching Contacts by City:");
addressBook.searchByCity("Los Angeles");

console.log("\n🔍 Searching Contacts by State:");
addressBook.searchByState("California");
