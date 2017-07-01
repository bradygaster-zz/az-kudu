const Kudu = require("../");
const { login } = require("az-login");

login().then(({ clientFactory }) => {
    const kudu = clientFactory(Kudu, "web-app-name");
    kudu.runCommand("ls").then((response) => {
        console.log(response);
    });
});