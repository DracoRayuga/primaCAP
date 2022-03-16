const cds = require('@sap/cds');

module.exports = (srv) => {
    const {
        projectDetails,
        primaDetails,
        primaStatus,
        primaErrorLog
    } = srv.entities('opensap.prima')
}