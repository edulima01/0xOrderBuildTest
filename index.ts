import { ZeroExOrderBuilder, EthNetwork } from "0xorderbuilder";
import { BigNumber } from "bignumber.js";

function testZeroExOrderBuilder() {
	ZeroExOrderBuilder.buildQuoteProviderOrder("0xf60345bcff9feedb98bbdfc996b33cba00ee2c75", "0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570",
		"0xd0a1e359811322d97991e03f863a0c30c2cf029c", new BigNumber(1000000000000000000), new BigNumber(10000),
		"http://localhost:3000/api/v0", EthNetwork.Kovan).then((order: any) => {
			const signedOrder = ZeroExOrderBuilder.buildSignedOrder(order, "0x5edd9d13a5d62821bbda8ac6da7d7ca69a1b540dc99ac9232fefc04d09e28055");
			console.log(JSON.stringify(signedOrder));
		});

}

testZeroExOrderBuilder();