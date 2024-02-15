import Onboard, { type OnboardAPI } from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';

const injected = injectedModule();

const wallets = [injected];

const chains = [
	{
		id: '0x66eee',
		token: 'ETH',
		label: 'Arbitrum Sepolia',
		rpcUrl: 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public'
	}
];

const appMetadata = {
	name: 'Synpress Test Example',
	icon: '<svg>Synpress Test Icon</svg>',
	description: 'Example for synpress usage',
	recommendedInjectedWallets: [{ name: 'Metamask', url: 'https://metamask.io' }]
};

let onboard;
if (!onboard) {
	onboard = Onboard({
		wallets,
		chains,
		appMetadata,
		accountCenter: {
			desktop: { enabled: false },
			mobile: { enabled: false }
		},
		connect: {
			autoConnectLastWallet: true
		}
	});
}

export default onboard as OnboardAPI;
