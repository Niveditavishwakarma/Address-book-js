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
      console.log(`No contact found with name "${firstName} ${lastName}"`);
      return;
    }

    const nameRegex = /^[A-Z][a-z]{2,}$/;
    const addressRegex = /^[A-Za-z0-9\s]{4,}$/;
    const zipRegex = /^\d{6}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let updatedFields = [];

    Object.keys(updatedDetails).forEach((key) => {
      let newValue = updatedDetails[key];

      if (!newValue) return;

      switch (key) {
        case "firstName":
        case "lastName":
          if (!nameRegex.test(newValue)) {
            console.log(
              `Invalid ${key}. Must start with a capital letter and have at least 3 characters.`
            );
            return;
          }
          break;
        case "address":
        case "city":
        case "state":
          if (!addressRegex.test(newValue)) {
            console.log(`Invalid ${key}. Must have at least 4 characters.`);
            return;
          }
          break;
        case "zip":
          if (!zipRegex.test(newValue)) {
            console.log("Invalid ZIP Code.");
            return;
          }
          break;
        case "phoneNumber":
          if (!phoneRegex.test(newValue)) {
            console.log("Invalid Phone Number.");
            return;
          }
          if (
            this.contacts.some(
              (c) => c.phoneNumber === newValue && c !== contact
            )
          ) {
            console.log(
              "Error: Contact with this phone number already exists."
            );
            return;
          }
          break;
        case "email":
          if (!emailRegex.test(newValue)) {
            console.log("Invalid Email.");
            return;
          }
          break;
        default:
          console.log(`Unknown field: ${key}, skipping...`);
          return;
      }

      contact[key] = newValue;
      updatedFields.push(key);
    });

    if (updatedFields.length > 0) {
      console.log(`Contact "${firstName} ${lastName}" updated successfully!`);
      contact.displayContact();
    } else {
      console.log("No valid updates were provided.");
    }
  }
}

module.exports = AddressBook;
