const crypto = require('crypto');
const encrypted = '7e2daf1b333bbc53a0cbd154926c520d025d02119094a836782eb68466781974';


  const algorithm = 'aes-192-cbc';
  const password = 'password';
  const iv = Buffer.alloc(16, 0); // Initialization vector.
  const key = crypto.scryptSync(password, 'salt', 24);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  
  let decrypted = '';
  decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
      decrypted += chunk.toString('utf8');
    }
  });
  decipher.on('end', () => {
    console.log(decrypted);
    // Prints: some clear text data
  });
  // Encrypted with same algorithm, key and iv.
  // const encrypted =
  //   'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
  decipher.write(encrypted, 'hex');
  decipher.end();  

