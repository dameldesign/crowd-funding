const ethers =  require("ethers");
const { allUsers, findUser } = require("./profile.controller.js");



function _erc20_deposit_parse (_payload) {
    try {
      let input_data = [];
      input_data[0] = ethers.dataSlice(_payload, 0, 1);
      input_data[1] = ethers.dataSlice(_payload, 1, 21);
      input_data[2] = ethers.dataSlice(_payload, 21, 41);
      input_data[3] = ethers.dataSlice(_payload, 41, 73);

      if (!input_data[0]) {
        throw new EvalError("erc20 deposit unsuccessful");
        return ["0x0", "0x0", BigInt(0)];
      }
      return [
        getAddress(input_data[1]),
        getAddress(input_data[2]),
        BigInt(input_data[3]),
        // parseEther(String(parseInt(input_data[3])), "gwei"),
      ];
    } catch (e) {
      throw new EvalError(String(e));
      return ["0x0", "0x0", BigInt(0)];
    }
  };

  function erc20_deposit_process (_payload) {
    //process the abi-encoded input data sent by the erc20 portal after and erc20 deposit
    try {
      let [erc20, account, amount] = _erc20_deposit_parse(_payload);
      console.log(`${amount} ${erc20} tokens deposited to account ${account}`);
      return deposit(account, amount);
    } catch (e) {
      throw new Error(`error depositing erc20 tokens ${e}`);
    }
  };