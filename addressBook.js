class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    const isDuplicate = this.contacts.some(
      (c) =>
        c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
        c.lastName.toLowerCase() === contact.lastName.toLowerCase()
    );

    if (isDuplicate) {
      console.log(
        `❌ Error: Contact "${contact.firstName} ${contact.lastName}" already exists.`
      );
      return;
    }

    this.contacts.push(contact);
    console.log(
      `✅ Contact "${contact.firstName} ${contact.lastName}" added successfully!`
    );
  }

  displayContacts() {
    console.log("\n📖 --- Address Book Contacts ---");
    if (this.contacts.length === 0) {
      console.log("📭 No contacts available.");
      return;
    }
    this.contacts.forEach((contact) => contact.displayContact());
  }

  sortByField(field) {
    const validFields = ["city", "state", "zip"];
    if (!validFields.includes(field)) {
      console.log(
        `❌ Invalid field "${field}". Please use: City, State, or Zip.`
      );
      return;
    }

    this.contacts.sort((a, b) => a[field].localeCompare(b[field]));

    console.log(`\n🔀 Address Book Sorted by ${field.toUpperCase()}:`);
    this.displayContacts();
  }
}

module.exports = AddressBook;
