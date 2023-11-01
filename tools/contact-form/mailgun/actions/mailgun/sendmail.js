function main(params) {
  console.log('params:', params);
  let retStatus = 403;
  let returnVal = 'Forbidden';
  // eslint-disable-next-line no-underscore-dangle
  if (params.__ow_headers.origin && params.__ow_headers.origin.includes('99brandparty')) {
    retStatus = 200;
    returnVal = params;
  }

  return {
    statusCode: retStatus,
    body: {
      msg: returnVal,
    },
  };
}
exports.main = main;
