<script lang="ts">
	import onboard from '$lib/web3onboard';

	// Subscribe to wallet updates
	const wallets$ = onboard.state.select('wallets');

	// The first wallet in the array of connected wallets
	$: connectedAccount = $wallets$?.[0]?.accounts?.[0];

	$: account = connectedAccount?.ens?.name
		? {
				ens: connectedAccount?.ens,
				address: connectedAccount?.address
			}
		: { address: connectedAccount?.address };

	const connect = async () => {
		await onboard.connectWallet();
	};

	const disconnect = ({ label }) => {
		onboard.disconnectWallet({ label });
	};
</script>

{#if $wallets$?.[0]?.provider}
	<div>
		<div id="accounts">
			{account.ens?.name ? account.ens.name : account.address}
		</div>
		<div>Connected to {$wallets$?.[0]?.label}</div>
		<button
			on:click={() => {
				disconnect($wallets$?.[0]);
			}}>Disconnect</button
		>
	</div>
{:else}
	<div>
		<button id="connectButton" on:click={connect}> Connect </button>
	</div>
{/if}
