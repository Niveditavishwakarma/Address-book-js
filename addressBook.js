const Contact = require("./contact");

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  // Add a contact (checks for duplicate names)
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

  // Find a contact by name
  findContact(firstName, lastName) {
    return this.contacts.find(
      (contact) =>
        contact.firstName.toLowerCase() === firstName.toLowerCase() &&
        contact.lastName.toLowerCase() === lastName.toLowerCase()
    );
  }

  // Edit a contact's details
  editContact(firstName, lastName, updatedDetails) {
    let contact = this.findContact(firstName, lastName);
    if (!contact) {
      console.log(`❌ No contact found with name "${firstName} ${lastName}"`);
      return;
    }

    Object.assign(contact, updatedDetails);
    console.log(`✏️ Contact "${firstName} ${lastName}" updated successfully!`);
  }

  // Delete a contact by name
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

  // Display all contacts
  displayContacts() {
    console.log("\n📖 --- Address Book Contacts ---");
    if (this.contacts.length === 0) {
      console.log("📭 No contacts available.");
      return;
    }
    this.contacts.forEach((contact) => contact.displayContact());
  }

  // Count total number of contacts using reduce()
  countContacts() {
    const totalContacts = this.contacts.reduce((count) => count + 1, 0);
    console.log(`📊 Total Contacts: ${totalContacts}`);
    return totalContacts;
  }

  // View Persons by City
  viewPersonsByCity(city) {
    const personsInCity = this.contacts
      .filter((contact) => contact.city.toLowerCase() === city.toLowerCase())
      .map((contact) => `${contact.firstName} ${contact.lastName}`);

    if (personsInCity.length === 0) {
      console.log(`❌ No persons found in city: ${city}`);
    } else {
      console.log(`📍 Persons in ${city}: ${personsInCity.join(", ")}`);
    }
  }

  // View Persons by State
  viewPersonsByState(state) {
    const personsInState = this.contacts
      .filter((contact) => contact.state.toLowerCase() === state.toLowerCase())
      .map((contact) => `${contact.firstName} ${contact.lastName}`);

    if (personsInState.length === 0) {
      console.log(`❌ No persons found in state: ${state}`);
    } else {
      console.log(`🌎 Persons in ${state}: ${personsInState.join(", ")}`);
    }
  }

  // Count Persons by City
  countPersonsByCity(city) {
    const count = this.contacts
      .filter((contact) => contact.city.toLowerCase() === city.toLowerCase())
      .reduce((total) => total + 1, 0);

    console.log(`🏙️ Number of persons in ${city}: ${count}`);
    return count;
  }

  // Count Persons by State
  countPersonsByState(state) {
    const count = this.contacts
      .filter((contact) => contact.state.toLowerCase() === state.toLowerCase())
      .reduce((total) => total + 1, 0);

    console.log(`🌍 Number of persons in ${state}: ${count}`);
    return count;
  }
}

module.exports = AddressBook;
