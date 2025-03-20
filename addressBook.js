const Contact = require("./contact");

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    const duplicate = this.contacts.some(
      (c) =>
        c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
        c.lastName.toLowerCase() === contact.lastName.toLowerCase()
    );

    if (duplicate) {
      console.log(
        `❌ Error: Contact with name "${contact.firstName} ${contact.lastName}" already exists.`
      );
      return;
    }

    this.contacts.push(contact);
    console.log(
      `✅ Contact "${contact.firstName} ${contact.lastName}" added successfully!`
    );
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

    Object.assign(contact, updatedDetails);
    console.log(`✏️ Contact "${firstName} ${lastName}" updated successfully!`);
  }

  deleteContact(firstName, lastName) {
    const initialLength = this.contacts.length;
    this.contacts = this.contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase() !== firstName.toLowerCase() ||
        contact.lastName.toLowerCase() !== lastName.toLowerCase()
    );

    if (this.contacts.length === initialLength) {
      console.log(`❌ No contact found with name "${firstName} ${lastName}"`);
    } else {
      console.log(
        `🗑️ Contact "${firstName} ${lastName}" deleted successfully!`
      );
    }
  }

  displayContacts() {
    console.log("\n📖 --- Address Book Contacts ---");
    if (this.contacts.length === 0) {
      console.log("📭 No contacts available.");
      return;
    }
    this.contacts.forEach((contact) => contact.displayContact());
  }

  countContacts() {
    const totalContacts = this.contacts.reduce((count) => count + 1, 0);
    console.log(`📊 Total Contacts: ${totalContacts}`);
    return totalContacts;
  }

  searchByCity(city) {
    const contactsInCity = this.contacts.filter(
      (contact) => contact.city.toLowerCase() === city.toLowerCase()
    );

    if (contactsInCity.length === 0) {
      console.log(`❌ No contacts found in city: ${city}`);
      return;
    }

    console.log(`📍 Contacts in ${city}:`);
    contactsInCity.map((contact) => contact.displayContact());

    const total = contactsInCity.reduce((count) => count + 1, 0);
    console.log(`📝 Total Contacts in ${city}: ${total}`);
  }

  searchByState(state) {
    const contactsInState = this.contacts.filter(
      (contact) => contact.state.toLowerCase() === state.toLowerCase()
    );

    if (contactsInState.length === 0) {
      console.log(`❌ No contacts found in state: ${state}`);
      return;
    }

    console.log(`🌎 Contacts in ${state}:`);
    contactsInState.map((contact) => contact.displayContact());

    const total = contactsInState.reduce((count) => count + 1, 0);
    console.log(`📝 Total Contacts in ${state}: ${total}`);
  }
}

module.exports = AddressBook;
