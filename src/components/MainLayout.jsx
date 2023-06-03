import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function MainLayout({childern}) {
  return (
		<div>
			<Header />
			{childern}
			<Footer />
		</div>
	);
}
