class Contact {
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    this.firstName = this.validateName(firstName, "First Name");
    this.lastName = this.validateName(lastName, "Last Name");
    this.address = this.validateAddress(address, "Address");
    this.city = this.validateAddress(city, "City");
    this.state = this.validateAddress(state, "State");
    this.zip = this.validateZip(zip);
    this.phoneNumber = this.validatePhoneNumber(phoneNumber);
    this.email = this.validateEmail(email);
  }

  validateName(name, fieldName) {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
      throw new Error(
        `${fieldName} must start with a capital letter and have at least 3 characters.`
      );
    }
    return name;
  }

  validateAddress(value, fieldName) {
    if (value.length < 4) {
      throw new Error(`${fieldName} must have at least 4 characters.`);
    }
    return value;
  }

  validateZip(zip) {
    const zipRegex = /^[1-9][0-9]{5}$/;
    if (!zipRegex.test(zip)) {
      throw new Error("Zip code must be a 6-digit number starting from 1-9.");
    }
    return zip;
  }

  validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      throw new Error("Phone number must be exactly 10 digits.");
    }
    return phone;
  }

  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format.");
    }
    return email;
  }

  displayContact() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(
      `Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}`
    );
    console.log(`Phone: ${this.phoneNumber}, Email: ${this.email}`);
    console.log("-----------------------------------");
  }
}

try {
  const contact1 = new Contact(
    "John",
    "Doe",
    "1234 Street",
    "New York",
    "Ny",
    "100001",
    "1234567890",
    "john.doe@example.com"
  );
  contact1.displayContact();
} catch (error) {
  console.error(error.message);
}

module.exports = Contact;
