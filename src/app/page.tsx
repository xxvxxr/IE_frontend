'use client';
import FileUploadComponent from './importPage';

export default function Home() {
	return (
		<div className='bg-white'>
			<div className='relative'>
				<div className='ml-8 max-w-6xl'>
					<div className='relative z-10 pt-14 lg:w-full lg:max-w-2xl'>
						<h1 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
							Unlock Peak Performance
						</h1>
						<div className='relative lg:px-2 lg:pr-0 min-h-dvh'>
							<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
								<p className='mt-6 text-lg leading-6 text-gray-600'>
									Revitalize your VW driving experience with our cutting-edge upgrades –
									unleash the full potential of your car and elevate every journey to new
									heights!
								</p>
								<div className='mt-10 flex items-center gap-x-6'>
									<main className='flex flex-col items-center justify-between'>
										<div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
											<FileUploadComponent />
										</div>
											
									</main>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
					<img
						className='object-cover lg:aspect-auto lg:h-full lg:w-full'
						src='https://images.unsplash.com/photo-1629885389996-c149c822392f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHZvbGtzd2FnZW4lMjBnb2xmfGVufDB8fDB8fHww'
						alt='Photo of a VW Golf GTI on a mountain road'
					/>
				</div>
			</div>
		</div>
	);
}
