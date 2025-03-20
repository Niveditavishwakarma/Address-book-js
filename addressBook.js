const Contact = require("./contact");

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
      console.log(`❌ No contact found with name "${firstName} ${lastName}".`);
      return;
    }
    Object.assign(contact, updatedDetails);
    console.log(`✅ Contact "${firstName} ${lastName}" updated successfully!`);
  }

  deleteContact(firstName, lastName) {
    const initialLength = this.contacts.length;
    this.contacts = this.contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase() !== firstName.toLowerCase() ||
        contact.lastName.toLowerCase() !== lastName.toLowerCase()
    );

    if (this.contacts.length === initialLength) {
      console.log(`❌ Contact "${firstName} ${lastName}" not found.`);
    } else {
      console.log(
        `✅ Contact "${firstName} ${lastName}" deleted successfully!`
      );
    }
  }

  getTotalContacts() {
    const count = this.contacts.reduce((acc) => acc + 1, 0);
    console.log(`📊 Total Contacts: ${count}`);
    return count;
  }

  findByCityOrState(location) {
    const filteredContacts = this.contacts.filter(
      (contact) =>
        contact.city.toLowerCase() === location.toLowerCase() ||
        contact.state.toLowerCase() === location.toLowerCase()
    );

    console.log(`\n🔎 Contacts in "${location}":`);
    if (filteredContacts.length === 0) {
      console.log("📭 No contacts found.");
    } else {
      filteredContacts.forEach((contact) => contact.displayContact());
    }
  }

  countByCityOrState() {
    const cityCount = this.contacts.reduce((acc, contact) => {
      acc[contact.city] = (acc[contact.city] || 0) + 1;
      return acc;
    }, {});

    const stateCount = this.contacts.reduce((acc, contact) => {
      acc[contact.state] = (acc[contact.state] || 0) + 1;
      return acc;
    }, {});

    console.log("\n📊 Contact Count by City:");
    console.table(cityCount);

    console.log("\n📊 Contact Count by State:");
    console.table(stateCount);
  }

  sortContactsByName() {
    this.contacts.sort((a, b) =>
      (a.firstName + " " + a.lastName).localeCompare(
        b.firstName + " " + b.lastName
      )
    );

    console.log("\n📖 --- Sorted Address Book ---");
    this.contacts.forEach((contact) => contact.displayContact());
  }
}

module.exports = AddressBook;
