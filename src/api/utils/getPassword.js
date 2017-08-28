export const getPassword = () =>
  process.argv.indexOf("--p") === -1 ? '' : process.argv[process.argv.indexOf("--p") + 1];