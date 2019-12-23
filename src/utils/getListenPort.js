const getListenPort = () => process.env?.LISTEN_PORT ?? 3000;

export default getListenPort;
