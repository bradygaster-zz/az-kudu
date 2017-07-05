const Kudu = require("../");
const { login } = require("az-login");

login().then(({ clientFactory }) => {
    const kudu = clientFactory(Kudu, "web-app-name");
    kudu.runCommand("node -v").then((response) => {
        console.log(response);
    }, (error) => {
        console.log(`[Error] ${error}`);
    });
});