import { ZeroExOrderBuilder, EthNetwork } from "0xorderbuilder";
import { BigNumber } from "bignumber.js";
import * as request from "request";

const yourWalletPrivateKey = "0x4362423894789234879237894238794789237483278947823478923"; // Fake private key. Just an example
const yourWalletAddress = "0x3264732646237842378476832786"; // Fake wallet address. Just an example
const addressOfTheTokenYouWantToSell = "0xe41d2489571d322189246dafa5ebde1f4699f498"; // ZRX on mainnet, on this example
const amountOfTheTokenYouWantToSell = new BigNumber(100000000000000000); // In base units. 0.1 ZRX on this example

const addressOfThETokenYouWantToGet = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // WETH on mainnet, on this example

const numberOfSecondsUntilTheOrderExpires = 100;
const relayerUrl = "http://localhost:3000/api/v0";
const ethNetworkInWhichTheRealyerIsConnected = EthNetwork.Mainnet;

function testZeroExOrderBuilder() {
	ZeroExOrderBuilder.buildQuoteProviderOrder(
		yourWalletAddress,
		addressOfTheTokenYouWantToSell, 
		addressOfThETokenYouWantToGet,
		amountOfTheTokenYouWantToSell,
		numberOfSecondsUntilTheOrderExpires * 1000,
		relayerUrl,
		ethNetworkInWhichTheRealyerIsConnected
	).then((order: any) => {
		const signedOrder = ZeroExOrderBuilder.buildSignedOrder(order, yourWalletPrivateKey);
		console.log(JSON.stringify(signedOrder));

		request.post(relayerUrl + '/order', { json: signedOrder }, (error, httpResponse, body) => {
			console.log(error);
			console.log(httpResponse);
			console.log(body);
		});
	}).catch((error) => {
		console.log(error);
	});
}

testZeroExOrderBuilder();