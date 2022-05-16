<script>
	import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

	let value = '';

	const download = async () => {
		try {
			await Filesystem.writeFile({
				path: 'onelern.txt',
				data: value,
				directory: Directory.Documents,
				encoding: Encoding.UTF8,
			});
		} catch (error) {
			alert(error);
		}
	};

	const open = async () => {
		try {
			const contents = await Filesystem.readFile({
				path: 'onelern.txt',
				directory: Directory.Documents,
				encoding: Encoding.UTF8,
			});
			alert(Directory.Documents);
	
			value = JSON.stringify(contents.data);
		} catch (error) {
			alert(error);
		}
	};

	const path = async () => {
		const contents = await Filesystem.readFile({
			path: `file:///storage/28A6-588D/onelern.txt`,
		});
		value = JSON.stringify(contents.data);
	};
</script>

<main>
	<textarea cols="30" rows="10" bind:value />

	<div>
		<button on:click={download}> Download </button>
		<button on:click={open}> Open </button>
		<button on:click={path}>Path</button>
	</div>
</main>

<style>
	main {
		padding: 40px;
	}
</style>