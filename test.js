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

  console.log("\nBefore Editing:");
  addressBook.displayContacts();

  console.log("\nEditing John's Contact:");
  addressBook.editContact("John", "Doe", {
    city: "Chicago",
    phoneNumber: "9876543330",
  });

  console.log("\nAfter Editing:");
  addressBook.displayContacts();
} catch (error) {
  console.error(error.message);
}
