import { Briefcase, SignIn } from '@githubprimer/octicons-react';
import React, { useRef, useState } from 'react';
import { useMount, useWindowScroll } from 'react-use';

import { gutter } from '../../constants';
import { useUserContext } from '../../hooks';
import { Container, FlexGroup } from '../../primitives';

import { NavBarHeader, NavBarItem, NavBarUsername, NavBarLogout } from '..';

const NavBar = () => {
	const headerRef = useRef(null);
	const [spacerHeight, setSpacerHeight] = useState(68);
	const user = useUserContext();
	const { y: scrollY } = useWindowScroll();

	useMount(() => {
		setSpacerHeight(headerRef.current.clientHeight);
	});

	return (
		<>
			<NavBarHeader ref={headerRef} hasScroll={scrollY > 0}>
				<Container>
					<FlexGroup
						justify="space-between"
						align="center"
						style={{ paddingBottom: gutter * 2, paddingTop: gutter * 2 }}
					>
						<NavBarItem to="/" icon={Briefcase} iconSize="medium">
							<span style={{ fontSize: 24 }}>Job Search</span>
						</NavBarItem>

						{user ? (
							<FlexGroup align="center">
								<NavBarUsername username={user.name} />
								<NavBarLogout user={user} />
							</FlexGroup>
						) : (
							<NavBarItem to="/login" icon={SignIn}>
								Login
							</NavBarItem>
						)}
					</FlexGroup>
				</Container>
			</NavBarHeader>
			<div style={{ height: spacerHeight, marginBottom: gutter * 3 }} />
		</>
	);
};

export default NavBar;
