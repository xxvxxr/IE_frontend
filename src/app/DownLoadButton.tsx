const DownloadButton: React.FC = () => {
	// Function to handle file download
	const handleDownload = async () => {
		try {
			// Fetch the file from the server
			const response = await fetch('/api/download', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/octet-stream'
				}
			});

			// Convert the response to a blob
			const blob = await response.blob();

			// Create a URL for the blob
			const url = window.URL.createObjectURL(new Blob([blob]));

			// Create a temporary anchor element
			const link = document.createElement('a');
			link.href = url;

			link.setAttribute('download', 'output.bin');

			// Simulate a click to trigger the download
			document.body.appendChild(link);
			link.click();

			// Clean up
			if (link.parentNode) {
				link.parentNode.removeChild(link);
			}
		} catch (error) {
			console.error('Error downloading file:', error);
		}
	};

	return (
		<>
			<button className="text-center" onClick={handleDownload}>Download File</button>
		</>
	);
};

export default DownloadButton;
