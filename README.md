# 0xOrderBuildTest

Utility to create and fill an order through a 0x relayer which implements the Standard Relayer API.

Install the dependencies first with:
```
npm install
```

Then, Just edit the constants on index.ts and run it with:
```
npm start
```

It should output the order created, any errors that happened, the final http response from the realyer, and the body of that response.
