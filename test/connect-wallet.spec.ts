import { MetaMask, testWithSynpress, unlockForFixture } from '@synthetixio/synpress';
import BasicSetup from './wallet-setup/basic.setup';

const test = testWithSynpress(BasicSetup, unlockForFixture);

const { expect } = test;

test('should connect wallet to the MetaMask Test Dapp', async ({ context, page, extensionId }) => {
	const metamask = new MetaMask(context, page, BasicSetup.walletPassword, extensionId);

	await page.goto('/');

	await page.locator('#connectButton').click();
	await metamask.connectToDapp();
	await expect(page.locator('#accounts')).toHaveText('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
});
