import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=30&nat=us");
  },

  narrowEmployee: function(employee) {
    return axios.get("https://randomuser.me/api/?first=" + employee +  "&limit=5&nat=us")
  }
};
