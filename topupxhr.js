export default [{
    matcher: '/lol-client-config/v3/client-config/lol.client_settings.paw.enableRPTopUp',
    preSend: (XhrRequestConfig) => {},
    postSend: (response) => {
        response.response = "false"
    }
  }]
