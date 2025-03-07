const Contact = require("./contact");

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    if (this.contacts.some((c) => c.phoneNumber === contact.phoneNumber)) {
      console.log("Error: Contact with this phone number already exists.");
    } else {
      this.contacts.push(contact);
      console.log("Contact added successfully!");
    }
  }

  displayContacts() {
    console.log("\n--- Address Book Contacts ---");
    this.contacts.forEach((contact) => contact.displayContact());
  }
}

const addressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "John",
    "Dooe",
    "1234 Street",
    "New York",
    "nainital",
    "100001",
    "9876543210",
    "john.doe@example.com"
  );
  addressBook.addContact(contact1);

  const contact2 = new Contact(
    "Jane",
    "Smith",
    "5678 Road",
    "LosAngeles",
    "California",
    "900002",
    "9876543210",
    "jane.smith@example.com"
  );
  addressBook.addContact(contact2);
} catch (error) {
  console.error(error.message);
}

addressBook.displayContacts();

module.exports = AddressBook;
