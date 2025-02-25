import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';

import CustomLink from '@/common/components/CustomLink/components';
import InputForm from '@/common/components/InputForm/components';
import SocialButtonLogin from '@/common/components/SocialButtonLogin/components';
import httpRequest from '@/common/utils/httpRequest';
import { setCookie } from '@/common/utils/session';
import showToast from '@/common/utils/showToast';

import WalletConnectorButton from '@/common/components/WalletConnector';
import { useWeb3Context } from '@/common/context';

const LoginFormComponent = () => {
		const { web3Provider, connect, address } = useWeb3Context()

	const router = useRouter();
	const [isLoading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const initialValues = {
		user_name: '',
		password: ''
	};
	const validationSchema = Yup.object({
		user_name: Yup.string().required('User name is required'),
		password: Yup.string().required('Password is required')
	});

	const onSubmit = async (values) => {
		try {
			const user = {
				user_name: values.user_name,
				password: values.password
			};
			setLoading(true);
			const response = await httpRequest.post({
				url: `/users/login`,
				data: user
			});
			if (response.data.success) {
				showToast.success('Login success');
				setCookie('token', response.data.data.access_token);
				router.push('/');
			}
		} catch (error) {
			showToast.error('Login error');
			if (!error?.response?.data?.success) {
				setErrors(error.response.data);
			}
		} finally {
			setLoading(false);
		}
	};

	const handleSocialLogin = async (res) => {
		try {
			const user = {
				access_token: res._token.accessToken,
				provider: res._provider
			};
			setLoading(true);
			const response = await httpRequest.post({
				url: `/users/login`,
				data: user
			});
			if (response.data.success) {
				setCookie('token', response.data.data.access_token);
				showToast.success('Login success');
				router.push('/');
			}
		} catch (error) {
			showToast.error('Login failed');
		} finally {
			setLoading(false);
		}
	};

	const handleSocialLoginFailure = (error) => {
		console.error(error);
		showToast.error();
	};
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			<Form>
				<h2 className="text-center mb-3">Login</h2>
				<div className="mb-3">
					<InputForm
						label="User name"
						placeholder="Enter user name"
						id="user_name"
						name="user_name"
						type="text"
						errors={errors.error?.message}
					/>
				</div>
				<div className="mb-3">
					<InputForm
						label="Password"
						placeholder="Password"
						id="password"
						name="password"
						type="password"
						errors={errors.error?.message}
					/>
				</div>
				<div className="d-flex justify-content-between mb-3">
					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input" id="remember" />
						<label className="form-check-label" htmlFor="remember">
							Remember
						</label>
					</div>
					<span>
						<CustomLink className="text-decoration-none" href="/user/forgot-password">
							Forgot password?
						</CustomLink>
					</span>
				</div>
				<div className="text-center">
					{isLoading ? (
						<button type="submit" className="btn btn-primary" disabled>
							<span className="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true" />
							Login
						</button>
					) : (
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					)}
{/*					<br/>
					OR
					<br/>
					<WalletConnectorButton />*/}
					<p className="mt-3">
						Not a member?{' '}
						<CustomLink className="text-decoration-none" href="/register">
							Need an account?
						</CustomLink>
					</p> 
					<p>or login in with:</p>
					<div>
						<WalletConnectorButton />
					</div>
					{/*<div>
						<SocialButtonLogin
							handleSocialLogin={handleSocialLogin}
							handleSocialLoginFailure={handleSocialLoginFailure}
							provider="google"
						/>
					</div>*/}
				</div>
			</Form>
		</Formik>
	);
};

export default LoginFormComponent;
