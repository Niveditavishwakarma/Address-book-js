const Contact = require("./contact");

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    if (this.contacts.some((c) => c.phoneNumber === contact.phoneNumber)) {
      console.log("❌ Error: Contact with this phone number already exists.");
    } else {
      this.contacts.push(contact);
      console.log("✅ Contact added successfully!");
    }
  }

  displayContacts() {
    console.log("\n--- Address Book Contacts ---");
    if (this.contacts.length === 0) {
      console.log("Address book is empty.");
      return;
    }
    this.contacts.forEach((contact) => contact.displayContact());
  }

  findContact(firstName, lastName) {
    return this.contacts.find(
      (contact) =>
        contact.firstName.toLowerCase() === firstName.toLowerCase() &&
        contact.lastName.toLowerCase() === lastName.toLowerCase()
    );
  }

  editContact(firstName, lastName, updatedDetails) {
    let contact = this.findContact(firstName, lastName);
    if (!contact) {
      console.log(`❌ No contact found with name "${firstName} ${lastName}"`);
      return;
    }

    let updatedFields = [];
    Object.keys(updatedDetails).forEach((key) => {
      if (!updatedDetails[key]) return;
      contact[key] = updatedDetails[key];
      updatedFields.push(key);
    });

    if (updatedFields.length > 0) {
      console.log(
        `✅ Contact "${firstName} ${lastName}" updated successfully!`
      );
      contact.displayContact();
    } else {
      console.log("No valid updates were provided.");
    }
  }

  deleteContact(firstName, lastName) {
    const index = this.contacts.findIndex(
      (contact) =>
        contact.firstName.toLowerCase() === firstName.toLowerCase() &&
        contact.lastName.toLowerCase() === lastName.toLowerCase()
    );

    if (index === -1) {
      console.log(`❌ No contact found with name "${firstName} ${lastName}"`);
      return;
    }

    this.contacts.splice(index, 1);
    console.log(`✅ Contact "${firstName} ${lastName}" deleted successfully!`);
  }

  // ✅ Get total number of contacts using reduce
  getContactCount() {
    const count = this.contacts.reduce((total) => total + 1, 0);
    console.log(` Total Contacts: ${count}`);
    return count;
  }
}

module.exports = AddressBook;
