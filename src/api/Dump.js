
const Dump = {
  username: {
    type: String,
    required: true,
    length: { min: 3, max: 32 }
  },
  pets: [{
    name: {
      type: String,
      required: true
    },
    animal: {
      type: String,
      enum: ['cat', 'dog', 'cow']
    }
  }],
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      match: /^[0-9]+$/,
      required: true
    }
  }
}

/**
 * var str = "hello, world!";

 */

export default Dump