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
    const nameRegex = /^[A-Z][a-z]{2,}$/;
    const addressRegex = /^[A-Za-z0-9\s]{4,}$/;
    const zipRegex = /^\d{6}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      throw new Error(
        "First Name and Last Name must start with a capital letter and have at least 3 characters."
      );
    }
    if (
      !addressRegex.test(address) ||
      !addressRegex.test(city) ||
      !addressRegex.test(state)
    ) {
      throw new Error(
        "Address, City, and State must have at least 4 characters."
      );
    }
    if (!zipRegex.test(zip)) {
      throw new Error("Invalid ZIP Code.");
    }
    if (!phoneRegex.test(phoneNumber)) {
      throw new Error("Invalid Phone Number.");
    }
    if (!emailRegex.test(email)) {
      throw new Error("Invalid Email.");
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  displayContact() {
    console.log(
      `${this.firstName} ${this.lastName} | ${this.address}, ${this.city}, ${this.state}, ${this.zip} | ${this.phoneNumber} | ${this.email}`
    );
  }
}

module.exports = Contact;
