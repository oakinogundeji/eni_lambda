'use strict';

const
  Promise = require('bluebird'),
  AWS = require('aws-sdk');
  //EC2 = require('aws-sdk/ec2');

AWS.config.update({
  region: 'ca-central-1'
});

AWS.config.setPromisesDependency(Promise);

const  ec2 = new AWS.EC2 ();

exports.default = async (event, ctc, cbk) => {
  const eniParams = {};
  const enis = await ec2.describeNetworkInterfaces(eniParams).promise();
  console.log('enis');
  return console.log(enis);
};
