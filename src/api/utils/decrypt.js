import crypto from "crypto";

export const decrypt = (text, password) => {
  const decipher = crypto.createDecipher("aes-256-ctr", password)
  let result = decipher.update(text, "hex", "utf8");
  result += decipher.final("utf8");
  return result;  
}