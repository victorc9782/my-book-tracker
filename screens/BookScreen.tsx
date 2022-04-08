import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NativeBaseProvider, Box, FlatList, Icon, IconButton, Pressable } from "native-base";
import { RootTabScreenProps } from '../types';

export default function BookScreen({ navigation }: RootTabScreenProps<'Book'>) {
	const addButtonPress = () => {
		console.log('addButtonPress');
	}
	function Books() {
		const bookInfo = [
			{
				title: 'My Book'
			},
			{
				title: 'My Book 2'
			},
			{
				title: 'My Book 3'
			},
			{
				title: 'My Book 4'
			}
		];
		return <FlatList numColumns={3} data={bookInfo} renderItem={({
			item
		}) => {
			return (
				<Pressable onPress={() => console.log("I'm Pressed")} >
					<Box width={Dimensions.get('window').width/3} borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
						<Text style={{color: 'black'}}>{item.title}</Text>

					</Box>
				</Pressable>
			);
		}} />;
	}
	return (
		<NativeBaseProvider>
			<View style= {{flex:1}}>
				<Books />
					{/* <FlatList numColumns={3} data={bookInfo} renderItem={
						({book}) => {return (
						<Pressable onPress={() => console.log("I'm Pressed")} >
							<Text style={{color: 'white'}}>{book.title}</Text>
						</Pressable>)
						}
					}/> */}
						{/* {
							bookInfo.map((book, index) => {
								return (
									<Pressable onPress={() => console.log("I'm Pressed")}key={index} >
										<Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
											<Text>{book.title}</Text>

										</Box>
									</Pressable>
								)
							})
						} */}
				<View
					style={{
						//alignSelf: 'flex-end',
						//position: 'absolute',
						//bottom: 20
						margin: 30,
						flexDirection: 'row',
						justifyContent: 'flex-end',
						// bottom: 20
					}}
				>
					<IconButton  
						_icon={{
							as: MaterialIcons,
							name: "add"
						}}
						borderRadius="full" 
						variant="solid"
						size="md"
						// onPress={() => addButtonPress()}
					/>
				</View>
			</View>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
container: {
	flex: 1,
	justifyContent: 'center',
},
title: {
	fontSize: 20,
	fontWeight: 'bold',
},
separator: {
	marginVertical: 30,
	height: 1,
	width: '80%',
},
});
