
const Dump = {
  username: {
    type: "String",
    required: true,
    length: { min: 3, max: 32 }
  },
  tanggal: {
    type: "Date",
    required: true
  },
  jumlah: {
    type: "Number",
    required: true
  },

}

/**
 * var str = "hello, world!";

 */

export default Dump