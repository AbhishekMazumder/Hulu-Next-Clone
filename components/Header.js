import React from 'react';
import {
	HomeIcon,
	BadgeCheckIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
	CollectionIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import HeaderItem from './HeaderItem';

const Header = () => {
	return (
		<hedaer className="m-5 flex flex-col sm:flex-row justify-between items-center h-auto">
			<div className="flex flex-grow justify-around max-w-2xl">
				<HeaderItem title="HOME" Icon={HomeIcon} />
				<HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" Icon={HomeIcon} />
				<HeaderItem title="SEARCH" Icon={SearchIcon} />
				<HeaderItem title="ACCOUNT" Icon={UserIcon} />
			</div>
			<Image
				src="https://links.papareact.com/ua6"
				width={200}
				height={100}
				className="object-contain"
			/>
		</hedaer>
	);
};

export default Header;
