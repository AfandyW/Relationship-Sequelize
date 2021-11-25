const models = require('./models');
const Company = models.Company;


Company.create({
    name: "My super company"
  })
  .then((newCompany) => {
    // The get() function allows you to recover only the DataValues of the object
    console.log(newCompany.get())
  })
  .catch((err) => {
    console.log("Error while company creation : ", err)
  })