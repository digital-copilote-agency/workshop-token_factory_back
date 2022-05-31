import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import solc from 'solc';
import { resolve } from 'path';

@Injectable()
export class AppService {
  getContractInput(): string {
    const input = readFileSync(
      resolve(__dirname, '../src/contracts/ERC20.sol'),
    );
    console.log(input.toString());

    // const output = JSON.parse(solc.compile(JSON.stringify(input)));
    // const bytecode = output.contracts[':ContractName'].bytecode;
    // const abi = JSON.parse(output.contracts[':ContractName'].interface);
    // console.log('\nBytecode: ', bytecode, '\nABI: ', abi);

    return 'Hello World!';
  }
}
