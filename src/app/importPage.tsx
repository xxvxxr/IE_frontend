'use client';

import React, { useState } from 'react';
import DownloadButton from './DownLoadButton';

const FileUploadComponent = () => {
	const [selectedFile, setSelectedFile] = useState<File>();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!selectedFile) return;

		try {
			const formData = new FormData();

			formData.set('file', selectedFile);
			const res = await fetch('api/upload', {
				method: 'POST',
				body: formData
			});

			if (!res.ok) throw new Error('Failed to upload file');
		} catch (error: any) {
			console.error(error);
		}
	};

	return (
		<div className='text-center bg-blend-color-dodge bg-gray-50 border-2 border-slate-100 rounded-lg p-4'>
			<svg
				className='mx-auto h-12 w-12 text-gray-400'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				aria-hidden='true'>
				<path
					vectorEffect='non-scaling-stroke'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
				/>
			</svg>
			<h3 className='mt-2 text-sm font-semibold text-gray-900'>Upload File</h3>
			<p className='mt-1 text-sm text-gray-500'>
				Select the program to be onboarded to the microcontroller.
			</p>
			<div className='mt-6'>
				<form
					onSubmit={onSubmit}
					className='inline-flex items-center rounded-md bg-intEngGreen px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#39b598] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:cursor-pointer'>
					<button>
						<input
							type='file'
							onChange={(e) => setSelectedFile(e.target.files?.[0])}
							className='hover:cursor-pointer'
						/>
					</button>
				</form>
			</div>
			<div className="mt-4 rounded bg-orange-500 w-40 inline-flex items-center justify-center">{selectedFile && <DownloadButton />}</div>
		</div>
	);
};

export default FileUploadComponent;
