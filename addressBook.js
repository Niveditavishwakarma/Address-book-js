const Contact = require("./contact");

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    // 🔍 Check for duplicate by filtering existing contacts
    const isDuplicate = this.contacts.some(
      (c) =>
        c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
        c.lastName.toLowerCase() === contact.lastName.toLowerCase()
    );

    if (isDuplicate) {
      console.log(
        `❌ Error: Contact "${contact.firstName} ${contact.lastName}" already exists.`
      );
    } else {
      this.contacts.push(contact);
      console.log(
        `✅ Contact "${contact.firstName} ${contact.lastName}" added successfully!`
      );
    }
  }

  displayContacts() {
    console.log("\n--- Address Book Contacts ---");
    if (this.contacts.length === 0) {
      console.log("📂 Address book is empty.");
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
      console.log("⚠️ No valid updates were provided.");
    }
  }

  deleteContact(firstName, lastName) {
    const initialCount = this.contacts.length;

    // 🔥 Remove contact using `filter`
    this.contacts = this.contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase() !== firstName.toLowerCase() ||
        contact.lastName.toLowerCase() !== lastName.toLowerCase()
    );

    if (this.contacts.length === initialCount) {
      console.log(`❌ No contact found with name "${firstName} ${lastName}"`);
    } else {
      console.log(
        `✅ Contact "${firstName} ${lastName}" deleted successfully!`
      );
    }
  }

  getContactCount() {
    // 📊 Using `reduce()` to count total contacts
    const count = this.contacts.reduce((total) => total + 1, 0);
    console.log(`📊 Total Contacts: ${count}`);
    return count;
  }
}

module.exports = AddressBook;
