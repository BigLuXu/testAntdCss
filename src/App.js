import React, { useCallback, useEffect, useState } from 'react'
import {
	Form,
	Select,
	InputNumber,
	DatePicker,
	Switch,
	Slider,
	Button,
	Rate,
	Typography,
	Space,
	Divider,
} from 'antd'
import './App.less'
import { track, inject, useInject } from './rtrack/index'
import { home as trackEvents } from './rtrack/docs/tracks/index'
import { initializeApp } from 'firebase/app'
import { ref as sRef } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase, ref, set } from 'firebase/database'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { addDoc } from 'firebase/firestore'

const { Option } = Select
const { Title } = Typography

// export interface FirebaseOptions
const firebaseConfig = {
	apiKey: 'AIzaSyDwuRHHjwvld7cZPUrHZIoefSL6rb6xLIE',
	authDomain: 'up-test-368f9.firebaseapp.com',
	projectId: 'up-test-368f9',
	storageBucket: 'up-test-368f9.appspot.com',
	messagingSenderId: '438732706143',
	appId: '1:438732706143:web:f7141d01491771c18d66ea',
	measurementId: 'G-7JB7B1D5SN',
	databaseURL:
		'https://up-test-368f9-default-rtdb.asia-southeast1.firebasedatabase.app',
}

// Initialize Firebase

// const analytics = getAnalytics(app)

// const db = getFirestore(app)
// console.log(app, analytics)

// Get a list of cities from your database
// async function getCities(db) {
// 	const citiesCol = collection(db, 'cities')
// 	const citySnapshot = await getDocs(citiesCol)
// 	const cityList = citySnapshot.docs.map((doc) => doc.data())
// 	return cityList
// }

const App = () => {
	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)
	// const db = getDatabase()

	const writeUserData = (name) => {
		const db = getDatabase()
		set(ref(db, 'up-test-368f9/'), {
			username: name,
		})
	}

	writeUserData('123')
	// Get a list of cities from your database

	// eslint-disable-next-line react-hooks/exhaustive-deps

	const request = async () => {
		const db = getDatabase()
		const citiesRef = collection(db, 'cities')
		await Promise.all([
			addDoc(collection(citiesRef, 'SF', 'landmarks'), {
				name: 'Golden Gate Bridge',
				type: 'bridge',
			}),
			addDoc(collection(citiesRef, 'SF', 'landmarks'), {
				name: 'Legion of Honor',
				type: 'museum',
			}),
			addDoc(collection(citiesRef, 'LA', 'landmarks'), {
				name: 'Griffith Park',
				type: 'park',
			}),
			addDoc(collection(citiesRef, 'LA', 'landmarks'), {
				name: 'The Getty',
				type: 'museum',
			}),
			addDoc(collection(citiesRef, 'DC', 'landmarks'), {
				name: 'Lincoln Memorial',
				type: 'memorial',
			}),
			addDoc(collection(citiesRef, 'DC', 'landmarks'), {
				name: 'National Air and Space Museum',
				type: 'museum',
			}),
			addDoc(collection(citiesRef, 'TOK', 'landmarks'), {
				name: 'Ueno Park',
				type: 'park',
			}),
			addDoc(collection(citiesRef, 'TOK', 'landmarks'), {
				name: 'National Museum of Nature and Science',
				type: 'museum',
			}),
			addDoc(collection(citiesRef, 'BJ', 'landmarks'), {
				name: 'Jingshan Park',
				type: 'park',
			}),
			addDoc(collection(citiesRef, 'BJ', 'landmarks'), {
				name: 'Beijing Ancient Observatory',
				type: 'museum',
			}),
		])
	}
	request()
	const handleAdd = () => {
		// setOnes([...ones, 1])
	}
	return (
		<>
			<section
				style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}
			>
				<Space align='start'>
					<img
						style={{ width: 40, height: 40 }}
						src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
						alt='Ant Design'
					/>
					<Title level={2} style={{ marginBottom: 0 }}>
						Ant Design
					</Title>
				</Space>
			</section>
			<div>
				<button onClick={handleAdd}>Add</button>
			</div>
			<Divider style={{ marginBottom: 60 }}>Form</Divider>
			<Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
				<Form.Item label='数字输入框'>
					<InputNumber min={1} max={10} defaultValue={3} />
					<span className='ant-form-text'> 台机器</span>
					<a href='https://ant.design'>链接文字</a>
				</Form.Item>
				<Form.Item label='开关'>
					<Switch defaultChecked />
				</Form.Item>
				<Form.Item label='滑动输入条'>
					<Slider defaultValue={70} />
				</Form.Item>
				<Form.Item label='选择器'>
					<Select defaultValue='lucy' style={{ width: 192 }}>
						<Option value='jack'>jack</Option>
						<Option value='lucy'>lucy</Option>
						<Option value='disabled' disabled>
							disabled
						</Option>
						<Option value='yiminghe'>yiminghe</Option>
					</Select>
				</Form.Item>
				<Form.Item label='日期选择框'>
					<DatePicker />
				</Form.Item>
				<Form.Item label='日期范围选择框'>
					<DatePicker.RangePicker />
				</Form.Item>
				<Form.Item label='评分'>
					<Rate defaultValue={5} />
				</Form.Item>
				<Form.Item wrapperCol={{ span: 8, offset: 8 }}>
					<Space>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
						<Button>Cancel</Button>
					</Space>
				</Form.Item>
			</Form>
		</>
	)
}

export default useInject(trackEvents, App)
