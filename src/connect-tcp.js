const mysql = require('promise-mysql');
const fs = require('fs');

// createTcpPool initializes a TCP connection pool for a Cloud SQL
// instance of MySQL.
const createTcpPool = async config => {
  // Note: Saving credentials in environment variables is convenient, but not
  // secure - consider a more secure solution such as
  // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
  // keep secrets safe.
  const dbConfig = {
    host: '34.65.181.147', // e.g. '127.0.0.1'
    port: '3306', // e.g. '3306'
    user: 'dav', // e.g. 'my-db-user'
    password: 'Davo-2001', // e.g. 'my-db-password'
    database: 'users', // e.g. 'my-database'
    // ... Specify additional properties here.
    ...config,
  };

  // Establish a connection to the database.
  return mysql.createPool(dbConfig);
};