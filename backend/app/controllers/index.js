// XXX even though ethers is not used in the code below, it's very likely
// it will be used by any DApp, so we are already including it here
const { ethers } = require("ethers");
const { viem } = require("viem");
const marketplace = require("./user/marketplace");
const user = require("./user/user.controllers");
const project = require("./user/project.controller");
var erc20abi = require("../utils/contract.json");
// const { allUsers, createUser, Player, totalUsers } = user;
// const { allCharacters, totalCharacters, Character, createTeam, resolveCharacters} = gameCharacters;


const rollup_server = process.env.ROLLUP_HTTP_SERVER_URL;
console.log("HTTP rollup_server url is " + rollup_server);
const DAPP_ADDRESS_REALY = "0xF5DE34d6BbC0446E2a45719E718efEbaaE179daE";
const ERC_20_PORTAL = "0x9C21AEb2093C32DDbC53eEF24B873BDCd1aDa1DB";
const ERC_721_PORTAL = "0x237F8DD094C0e47f4236f12b4Fa01d6Dae89fb87";
const nebula_token_address = "";
let DAPP_ADDRESS = "null";
let totalTransactions = 0;

emitNotice = async (data) => {
  const hexresult = stringToHex(data);
  advance_req = await fetch(rollup_server + "/notice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload: hexresult }),
  });
  return advance_req;
}


async function handle_advance(data) {
  console.log("Received advance request data " + JSON.stringify(data));
  const payload = data.payload;
  let JSONpayload = {};
  try {
    if (
      String(data.metadata.msg_sender).toLowerCase() ===
      DAPP_ADDRESS_REALY.toLowerCase()
    ) {
      console.log("setting Dapp address:", payload);
      DAPP_ADDRESS = payload;
    }

    if (
      String(data.metadata.msg_sender).toLowerCase() ===
      ERC_20_PORTAL.toLowerCase()
    ) {
      try {
        let payloads = marketplace.erc20_deposit_process(payload);
        const hexresult = stringToHex(payloads);
        console.log("The result is :", hexresult);
        advance_req = await fetch(rollup_server + "/notice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payload: hexresult }),
        });
      } catch (e) {
        return new Error_out(`failed to process ERC20 deposti ${payload} ${e}`);
      }
    }

    console.log("payload:" + JSON.stringify(payload));
    const payloadStr = ethers.toUtf8String(payload);
    JSONpayload = JSON.parse(payloadStr);
    console.log(`received request ${JSON.stringify(JSONpayload)}`);

  } catch (e) {

    console.log("error is:", e);
    console.log(`Adding notice with binary value "${payload}"`);
    await fetch(rollup_server + "/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: payload }),
    });
    return "reject";
  }

  let advance_req;
  try {
     //{"method":"create_user","first_name":"0xreadyPlayer1","middle_name":"0xreadyPlayer1","last_name":"0xreadyPlayer1",}
    if (JSONpayload.method === "create_user") {
        console.log("creating user....");
        const users = user.createUser(
          JSONpayload.first_name,
          JSONpayload.last_name,
          data.metadata.msg_sender,
        );
        console.log("created user is:", users);

        totalTransactions++

      // return an updated array of all players
      let allUsers = user.allUsers;
      const result = JSON.stringify({"method": "all_Users", "txId": totalTransactions, "target": data.metadata.msg_sender, "data": allUsers });
      advance_req = await emitNotice(result);


    //{"method":"get_user", "user": "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"}
    // NOTE: replace the address in user above with your own address.
    } else if(JSONpayload.method === "get_user"){
      let user = user.getUser(ethers.getAddress(JSONpayload.user));
      console.log("getting  profile....");
      console.log("user profile: " + JSON.stringify(user));
    }

    //{"method":"create_project","char1": 1,"char2": 8, "char3": 5}
    else if (JSONpayload.method === "create_project") {
      console.log("creating project....");
      const projects = project.createProject(
        JSONpayload.category,
        JSONpayload.projectName,
        JSONpayload.projectSummary,
        JSONpayload.total_amount,
        JSONpayload.methodology,
        JSONpayload.appendices,
        JSONpayload.expectedDeliverables,
        JSONpayload.milestones,
        JSONpayload.timeline,
        JSONpayload.team,
        JSONpayload.projectDocumentation,
        JSONpayload.securityMeasures,
        JSONpayload.technicalChallenges,
        JSONpayload.solution,
        JSONpayload.community,
        JSONpayload.scope,
        JSONpayload.fairness,
        JSONpayload.logoURI,
      );
      console.log("created project is:", projects);

      totalTransactions++

    // return an updated array of all players
    let allProjects = project.allProjects;
    const result = JSON.stringify({"method": "all_Users", "txId": totalTransactions, "target": data.metadata.msg_sender, "data": allProjects });
    advance_req = await emitNotice(result);


  //{"method":"get_user", "user": "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"}
  // NOTE: replace the address in user above with your own address.
  }
    //{"method": "withdraw", amount: 1000}
    else if (JSONpayload.method === "withdraw") {
      console.log("withdrawing....");
      if (DAPP_ADDRESS === "null") {
        console.log("Dapp address is not set");
        return "reject";
      }
      let withdraw = marketplace.withdraw(data.metadata.msg_sender, parseInt(JSONpayload.amount));
      console.log("withdraw is: " + JSON.stringify(withdraw));
      // return an updated array of all players
      let allUsers = user.allUsers;

      totalTransactions++
      const result = JSON.stringify({"method": "all_Players", "txId": totalTransactions, "target": data.metadata.msg_sender, "data": allUsers });
      advance_req = await emitNotice(result);

      // EMIT A VOUCHER TO BE PROCESSED ON L1
      const call = viem.encodeFunctionData({
        abi: erc20abi,
        functionName: "transfer",
        args: [data.metadata.msg_sender, BigInt(JSONpayload.value)],
      });
      let voucher = {
        destination: nebula_token_address, // Nebula token Address
        payload: call,
      };
      console.log(voucher);
      advance_req = await fetch(rollup_server + "/voucher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voucher),
      });
      console.log("starting a voucher");
    }


    else {
      console.log("method undefined");
      const result = JSON.stringify({
        error: String("method undefined:" + JSONpayload.method),
      });
      const hexresult = stringToHex(result);
      await fetch(rollup_server + "/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          payload: hexresult,
        }),
      });
    }
  } catch (e) {
    console.log("error is:", e);
    await fetch(rollup_server + "/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: stringToHex(JSON.stringify({ error: e })),
      }),
    });
    return "reject";
  }

  const json = await advance_req.json();
  console.log(
    "Received  status " +
      advance_req.status +
      " with body " +
      JSON.stringify(json)
  );
  return "accept";

}

async function handle_inspect(data) {
  console.log("Received inspect request data " + JSON.stringify(data));
  return "accept";
}

// convert string to hex
function stringToHex(str) {
  let hex = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i).toString(16);
    hex += charCode.padStart(2, '0'); // Ensure each byte is represented by two characters
  }
  return `0x${hex}`;
}

var handlers = {
  advance_state: handle_advance,
  inspect_state: handle_inspect,
};

var finish = { status: "accept" };

(async () => {
  while (true) {
    const finish_req = await fetch(rollup_server + "/finish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "accept" }),
    });

    console.log("Received finish status " + finish_req.status);

    if (finish_req.status == 202) {
      console.log("No pending rollup request, trying again");
    } else {
      const rollup_req = await finish_req.json();
      var handler = handlers[rollup_req["request_type"]];
      finish["status"] = await handler(rollup_req["data"]);
    }
  }
})();