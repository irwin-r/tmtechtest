import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { css } from 'emotion';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useMount } from 'react-use';

import { colors } from '../../constants';
import { Button, H2, Input } from '../../primitives';

import { LOGIN_MUTATION } from './queries';

const LoginForm = () => {
	const apolloClient = useApolloClient();
	const router = useRouter();

	const onCompleted = async () => {
		await router.push('/');
		return apolloClient.resetStore();
	};

	const [login, { error: mutationError }] = useMutation(LOGIN_MUTATION, {
		onCompleted,
	});

	const [error, setError] = useState(undefined);

	const inputRef = useRef(null);

	useMount(() => {
		inputRef.current.focus();
	});

	useEffect(() => {
		setError(mutationError?.message);

		return () => {};
	}, [mutationError]);

	const handleSubmit = async event => {
		event.preventDefault();

		const { value: email } = inputRef?.current;

		if (!email) {
			setError('Please provide a username');
			return;
		}

		login({ variables: { email } });
	};

	return (
		<form onSubmit={handleSubmit}>
			<H2 as="h1">Login</H2>
			{error ? (
				<p className={css({ color: colors.red['600'] })}>{error}</p>
			) : null}
			<p>
				<label htmlFor="username">User name</label>
				<Input id="username" name="email" ref={inputRef} type="email" />
				<input type="hidden" name="redirect" value="/profile" />
			</p>
			<Button type="submit">Login</Button>
		</form>
	);
};

export default LoginForm;
