const AddressBook = require("./addressBook");
const Contact = require("./contact");

const addressBook = new AddressBook();

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
addressBook.addContact(
  new Contact(
    "Bob",
    "Johnson",
    "234 Elm St",
    "New York",
    "California",
    "100002",
    "9876543240",
    "bob.johnson@example.com"
  )
);

addressBook.displayContacts();

addressBook.editContact("John", "Doe", { phoneNumber: "1234567890" });

addressBook.deleteContact("Jane", "Smith");

addressBook.getTotalContacts();

addressBook.findByCityOrState("California");

addressBook.countByCityOrState();

console.log("\n🔀 Sorting Contacts Alphabetically:");
addressBook.sortContactsByName();
