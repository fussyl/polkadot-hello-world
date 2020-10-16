const { ApiPromise, WsProvider} = require('@polkadot/api');

const wsProvider = new WsProvider('wss://rpc.polkadot.io');

const main = async () => {

    const api = await ApiPromise.create({ provider: wsProvider });

    const chain = await api.rpc.system.chain();

    await api.rpc.chain.subscribeNewHeads((lastHeader) => {
        console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
      });
}

main();



