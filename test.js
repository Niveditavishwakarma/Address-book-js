const Contact = require("./contact");
const AddressBook = require("./addressBook");

const addressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "John",
    "Doe",
    "1234 Street",
    "New York",
    "Nainital",
    "100001",
    "9876543210",
    "john.doe@example.com"
  );
  addressBook.addContact(contact1);

  const contact2 = new Contact(
    "Jane",
    "Smith",
    "5678 Road",
    "Los Angeles",
    "California",
    "900002",
    "9876543220",
    "jane.smith@example.com"
  );
  addressBook.addContact(contact2);

  const duplicateContact = new Contact(
    "John",
    "Doe",
    "1111 Avenue",
    "Boston",
    "Massachusetts",
    "02101",
    "9123456789",
    "john.duplicate@example.com"
  );
  addressBook.addContact(duplicateContact);

  console.log("\nBefore Deletion:");
  addressBook.displayContacts();
  addressBook.getContactCount();

  console.log("\nDeleting Jane Smith:");
  addressBook.deleteContact("Jane", "Smith");

  console.log("\nAfter Deletion:");
  addressBook.displayContacts();
  addressBook.getContactCount();
} catch (error) {
  console.error(error.message);
}
