const AddressBook = require("./addressBook");
const Contact = require("./contact");

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

addressBook.displayContacts();

console.log("\n🔍 Viewing Persons by City:");
addressBook.viewPersonsByCity("Los Angeles");

console.log("\n🔍 Viewing Persons by State:");
addressBook.viewPersonsByState("California");

console.log("\n📊 Counting Contacts:");
addressBook.countContacts();
